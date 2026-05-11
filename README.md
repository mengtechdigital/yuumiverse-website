# Yuumiverse Wiki

Built with [Astro Starlight](https://starlight.astro.build/).

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and **Add New Project**
3. Import your GitHub repo
4. Under **Framework Preset**, select **Astro** (or leave it on Auto)
5. Set **Root Directory** to `yuumiverse-website`
6. Click **Deploy**

Vercel will auto-detect Astro and handle builds on every push to `main`.

### Custom Domain

In your Vercel project settings, go to **Domains** and add your custom domain (e.g. `wiki.yuumiverse.gg` or `yuumiverse.gg`).

## Structure

```
src/content/docs/
├── index.mdx              # Homepage
├── getting-started/       # Welcome, Join, Rules, FAQ
├── plugins/               # 9 plugin docs
└── mechanics/             # Server mechanics
```

## Customizing

- Edit `astro.config.mjs` for nav, sidebar, and site metadata
- Edit `src/styles/custom.css` for colors and branding
- Add new pages by creating `.md` or `.mdx` files in `src/content/docs/`
