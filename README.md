# CineStream Real

create for me a fully functional movie streaming website that looks very real and realistic with real features and not demo or a prototype using this tmdb api key(cfeb9a142d3c0e7c518ca44225c8186a)

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://cinova.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d69858ed-2554-46ae-95a7-9fb6674a80ba).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Deploy to Vercel

1. Import this repository into Vercel.
2. Use `bun run build` as the build command. The Nitro Vercel target generates the deployment output.
3. In Vercel project settings, add `TMDB_API_KEY` for every environment you deploy (Production, Preview, and Development). Use your TMDB **API Key (v3 auth)**, not the API Read Access Token. Keep it as a server environment variable; do not add a `VITE_` prefix or commit a real key.
4. Deploy or redeploy after saving the variable.

TMDB supplies the catalog, search, and title details. Playback is embedded from the configured third-party player, so playback availability and its built-in controls depend on that provider and cannot be guaranteed by this website.
