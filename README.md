# Summit — Starter Next.js SaaS scaffold

This repository is a starter scaffold to transform the existing static site into a Next.js + TypeScript + Tailwind SaaS platform.

Quick start:

```bash
npm install
npm run dev
```

Next steps: implement Supabase auth, Stripe billing, and build dashboard pages.

Environment

Copy `.env.example` to `.env.local` and set the following values:

 - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (client key)
 - `NEXT_PUBLIC_STRIPE_PRICE_PRO` (price id for Pro plan)
 - `NEXT_PUBLIC_PRICE_PRO_VALUE` (numeric price for Pro, e.g. 9.99)
 - `NEXT_PUBLIC_PRICE_STARTER_VALUE`
 - `NEXT_PUBLIC_PRICE_ELITE_VALUE`

PayPal
------
This scaffold includes server endpoints to create and capture PayPal orders. Set the following values in `.env.local`:

- `PAYPAL_CLIENT_ID`
- `PAYPAL_CLIENT_SECRET`
- `NEXT_PUBLIC_PAYPAL_CLIENT_ID`

The pricing page uses PayPal by default if `NEXT_PUBLIC_PAYPAL_CLIENT_ID` is set.

Running locally

Install deps and run dev server:

```bash
npm install
npm run dev
```

Auth & Billing
--------------
This scaffold includes a minimal `lib/supabaseClient.ts` and placeholder API routes under `pages/api/` for Stripe checkout and webhooks. These are intentionally minimal; for production you must:

- Configure Supabase auth and server-side session handling
- Implement webhook signature verification using `STRIPE_WEBHOOK_SECRET`
- Secure server-side endpoints with proper validation and error handling

Continuous integration
----------------------
This repository includes a basic GitHub Actions workflow at `.github/workflows/ci.yml` which runs `npm ci` and `npm run build` on pushes to `main`.

