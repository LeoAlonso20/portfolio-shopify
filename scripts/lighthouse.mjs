import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { chromium } from '@playwright/test';
import { launch } from 'chrome-launcher';
import lighthouse from 'lighthouse';

const defaultUrl = 'http://127.0.0.1:4321/';
const targetUrl = process.env.LIGHTHOUSE_URL ?? defaultUrl;
const outputDirectory = new URL('../lighthouse-reports/', import.meta.url);
const packageRunner = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm';
let preview;
let chrome;

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: 'inherit', ...options });
    child.once('error', reject);
    child.once('exit', (code, signal) => {
      if (code === 0) resolve();
      else reject(new Error(`${command} ${args.join(' ')} exited with ${code ?? signal}.`));
    });
  });
}

async function responds(url) {
  try {
    const response = await fetch(url, { redirect: 'follow', signal: AbortSignal.timeout(2_000) });
    return response.ok;
  } catch {
    return false;
  }
}

async function waitForPreview(url) {
  const timeoutAt = Date.now() + 30_000;
  while (Date.now() < timeoutAt) {
    if (await responds(url)) return;
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`The production preview did not become ready at ${url}.`);
}

await mkdir(outputDirectory, { recursive: true });

try {
  if (targetUrl === defaultUrl) {
    await run(packageRunner, ['build'], { env: process.env });

    if (!(await responds(targetUrl))) {
      preview = spawn(
        packageRunner,
        ['preview', '--host', '127.0.0.1', '--port', new URL(targetUrl).port],
        {
          env: {
            ...process.env,
            ASTRO_PREVIEW_BACKGROUND: '1',
            ASTRO_TELEMETRY_DISABLED: '1',
          },
          stdio: ['ignore', 'pipe', 'pipe'],
        },
      );
      await waitForPreview(targetUrl);
    }
  } else if (!(await responds(targetUrl))) {
    throw new Error(`LIGHTHOUSE_URL is not reachable: ${targetUrl}`);
  }

  chrome = await launch({
    chromePath: process.env.CHROME_PATH ?? chromium.executablePath(),
    chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu'],
  });

  const result = await lighthouse(targetUrl, {
    port: chrome.port,
    output: ['json', 'html'],
    logLevel: 'error',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
  });

  if (!result?.lhr || !result.report) {
    throw new Error('Lighthouse did not return a report.');
  }

  const reports = Array.isArray(result.report) ? result.report : [result.report];
  await writeFile(new URL('portfolio.json', outputDirectory), reports[0] ?? '');
  await writeFile(new URL('portfolio.html', outputDirectory), reports[1] ?? '');

  if (result.lhr.runtimeError) {
    throw new Error(
      `Lighthouse navigation failed: ${result.lhr.runtimeError.code} — ${result.lhr.runtimeError.message}`,
    );
  }

  const scores = Object.fromEntries(
    Object.entries(result.lhr.categories).map(([key, category]) => [
      key,
      typeof category.score === 'number' ? Math.round(category.score * 100) : null,
    ]),
  );

  if (Object.values(scores).some((score) => score === null || score === 0)) {
    throw new Error(`Lighthouse returned an invalid score set: ${JSON.stringify(scores)}`);
  }

  const summary = {
    url: result.lhr.finalDisplayedUrl,
    scores,
    metrics: {
      lcp: result.lhr.audits['largest-contentful-paint']?.displayValue,
      cls: result.lhr.audits['cumulative-layout-shift']?.displayValue,
      tbt: result.lhr.audits['total-blocking-time']?.displayValue,
    },
  };

  console.log(JSON.stringify(summary, null, 2));
} finally {
  chrome?.kill();
  preview?.kill('SIGTERM');
}
