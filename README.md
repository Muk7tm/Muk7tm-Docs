# Muk7tm's Docs

Documentation website for Muk7tm's published projects:

- Mk7WIN
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

### Clean URLs on Netlify

This site uses VitePress `cleanUrls: true` (links like `/projects/mk7win`).
VitePress still outputs `.html` files in `dist` (like `/projects/mk7win.html`), so
`netlify.toml` includes rewrite rules to make clean URLs work on Netlify.

## License

See `LICENSE` (restricted: no rebranding, no repurposing; forks are allowed for improvements and must stay on-topic).
