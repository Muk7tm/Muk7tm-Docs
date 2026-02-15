import { rm } from 'node:fs/promises';

async function safeRm(path) {
  await rm(path, { recursive: true, force: true });
}

await safeRm('docs/.vitepress/dist');
await safeRm('docs/.vitepress/cache');
