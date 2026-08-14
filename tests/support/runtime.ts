import type { Page } from '@playwright/test';

import { origin } from './routes';

export interface RuntimeIssues {
  consoleErrors: string[];
  pageErrors: string[];
  failedLocalRequests: string[];
  badLocalResponses: string[];
}

function isLocal(url: string): boolean {
  try {
    return new URL(url).origin === origin;
  } catch {
    return false;
  }
}

export function observeRuntimeIssues(page: Page): RuntimeIssues {
  const issues: RuntimeIssues = {
    consoleErrors: [],
    pageErrors: [],
    failedLocalRequests: [],
    badLocalResponses: [],
  };

  page.on('console', (message) => {
    if (message.type() === 'error') issues.consoleErrors.push(message.text());
  });

  page.on('pageerror', (error) => {
    issues.pageErrors.push(error.message);
  });

  page.on('requestfailed', (request) => {
    if (!isLocal(request.url())) return;
    issues.failedLocalRequests.push(
      `${request.method()} ${request.url()} (${request.failure()?.errorText ?? 'unknown failure'})`,
    );
  });

  page.on('response', (response) => {
    if (!isLocal(response.url()) || response.status() < 400) return;
    issues.badLocalResponses.push(`${response.status()} ${response.url()}`);
  });

  return issues;
}
