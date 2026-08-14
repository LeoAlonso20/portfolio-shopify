import { existsSync } from 'node:fs';
import { extname, join } from 'node:path';

export function publicAssetPath(src?: string | null): string | null {
  if (!src) return null;

  const relativePath = src.replace(/^\/+/, '');
  return existsSync(join(process.cwd(), 'public', relativePath)) ? `/${relativePath}` : null;
}

export function publicAssetSrcset(src?: string | null): string | undefined {
  const resolvedSource = publicAssetPath(src);
  if (!resolvedSource) return undefined;

  const extension = extname(resolvedSource);
  const base = resolvedSource.slice(0, -extension.length);
  const variants = [640, 960, 1440, 1920]
    .map((width) => ({ width, src: publicAssetPath(`${base}-${width}${extension}`) }))
    .filter((variant): variant is { width: number; src: string } => Boolean(variant.src));

  return variants.length > 0
    ? [
        ...variants.map(({ src: variant, width }) => `${variant} ${width}w`),
        `${resolvedSource} 2400w`,
      ].join(', ')
    : undefined;
}
