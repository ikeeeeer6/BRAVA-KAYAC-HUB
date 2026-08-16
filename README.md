# Brava Kayak HUB — Admin analytics (local)

Implementación rápida para recoger eventos y verlos desde un panel `/admin`.

Quick summary:
- Events are captured client-side and saved to `localStorage` under `site_analytics_events` when no `VITE_EVENT_ENDPOINT` is configured.
- Admin page at `/admin` shows stored events after login.
- Login credentials are taken from `VITE_ADMIN_USER` / `VITE_ADMIN_PASS` (frontend env vars).

How to run locally:
1. Copy `.env.example` to `.env.local` and set `VITE_ADMIN_USER` and `VITE_ADMIN_PASS`.
2. (Optional) Set `VITE_EVENT_ENDPOINT` to a simple endpoint that accepts POST (events) and GET (list events).
3. Install and run:

```bash
npm install
npm run dev
```

4. Open the site and generate activity (click CTAs, navigate). Then visit your admin path and log in.

Admin path:
- By default the admin UI is at `/admin`.
- To change it, set `VITE_ADMIN_PATH` in `.env.local` (for example `VITE_ADMIN_PATH=/mi-secreto`) and restart the dev server.

Security notes:
- This is a lightweight developer/admin tool. Storing credentials in frontend env variables and checking them client-side is NOT secure for production. Use a backend-authenticated admin route and server-side storage for production.
- If you want, I can add a serverless endpoint (Vercel Function or simple Node server) to store events and protect the admin with server-side auth.

Vercel Analytics:
- The project imports `@vercel/analytics/react` — to collect analytics you must deploy to Vercel and enable Analytics for the project. The `<Analytics />` component should be added to the root of your app when deployed to production.

If you want I can now:
- Add a small serverless `api/collect` function (POST) and `api/list` (GET) that stores events in a file or in-memory store (useful for quick deployment), and implement server-side admin auth.
- Or implement a full secure backend with persistent storage.

Tell me which option prefieres y lo implemento.
