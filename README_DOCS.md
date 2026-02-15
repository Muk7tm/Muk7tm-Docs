# Muk7tm's Docs

Documentation website for Muk7tm's published projects:

- Mk7WIN
- MUKHTM
- join-voice-bot
- MWD (Muk7tm's Windows Debloater)
- Windows-ISO-Files

## Stack

- VitePress
- Markdown content pages
- Custom theme CSS (`docs/.vitepress/theme/custom.css`)
- Netlify-ready build setup

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Generated output: `docs/.vitepress/dist`

## Important

Edit source files only:

- `docs/*.md`
- `docs/projects/*.md`
- `docs/.vitepress/config.mts`
- `docs/.vitepress/theme/custom.css`

Do not edit `docs/.vitepress/dist/*` directly because it is regenerated on every build.

## Deploy on Netlify

1. Import this repository in Netlify.
2. Build command: `npm run build`
3. Publish directory: `docs/.vitepress/dist`

`netlify.toml` already contains these settings.
