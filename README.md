# Lumiere

A movie and TV discovery app powered by The Movie Database (TMDB), with third-party embedded playback.

## Local development

1. Install [Bun](https://bun.sh/) and run `bun install`.
2. Copy `.env.example` to `.env` and set `TMDB_API_KEY` to your TMDB **API Key (v3 auth)**. Keep the key private; do not use the API Read Access Token or a `VITE_` variable.
3. Run `bun run dev` to start the local preview.

## Deploy to Vercel

1. Import this repository into Vercel.
2. Set the build command to `bun run build`. Leave Vercel's output directory setting at its default; Nitro creates the deployment output.
3. Add `TMDB_API_KEY` in Vercel's project environment variables for each environment you use (Production, Preview, and Development). Use the TMDB **API Key (v3 auth)**, not the API Read Access Token. Do not prefix the variable with `VITE_`.
4. Deploy or redeploy after saving the variable.

The movie catalog, search, and title details use TMDB. Playback is provided by a third-party embedded player, so its availability, controls, and compatibility are managed by that provider and cannot be guaranteed by this app. A successful Vercel deployment does not guarantee that every title is playable.

## Project commands

- `bun run dev` — local development
- `bun run build` — production deployment build
- `bun run lint` — lint source files