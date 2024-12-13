# nuxt-strata

A Nuxt 3 Starter kit - `strata - starter` - Everything a starter project needs to hit the ground running

The aim of this Starter is to have a full-fledged working App + API ready to use as a `Nuxt-layer` and ready to deploy on any VPS.

## Features:

- Built with `nuxt-mini-stack`

Aims/includes:

- Auth
  - Throwaway/one-time accounts
  - Magic email link
  - Login / Logout
- Secure
- Database
  - Migrations
  - Backups
  - Rollback
  - Upload
- SEO defaults
  - OG Image setup
- Health API Endpoint
- Docker setup/deploy
- Caddy file setup

Where possible not re-inventing the wheel but using popular 3rd party efforts.

- VueUse
- BetterSqlite3
- ?HeadlessUI Components?
-

## How to

#### Run: Local / VPS

- Ensure you have a `.env` in the root with correct values
  - If missing copy `.env.example` and rename to `.env`
- Run cmd `npm run dev` or `npm run docker:build`

#### View: Local / VPS

- Accessable at `http://localhost:{APP_PORT}`

#### Admin Dashboard: Local / VPS

- Accessable at `http://localhost:{APP_PORT}/admin/{NUXT_ADMIN_SECRET}`

#### Create Users: Local / VPS

- Make a `get` api call from the client to:
  - anom: `http://localhost:{APP_PORT}/api/login/anom`
  - google: `http://localhost:{APP_PORT}/api/login/google`

#### Deployment: Local / VPS

- Ensure `Docker compose` & `npm` are installed
- Clone into directory `git clone 'your-git-repo'`
- Add config to Nginx or similar (tip: you may need `sudo`)
  - `ln -s ~/your-git-repo/nginx/example.co.uk /etc/nginx/sites-available/`
  - `ln -s ~/your-git-repo/nginx/example.co.uk /etc/nginx/sites-enabled/`
- Ensure you have a `.env` in the root with correct values
  - If missing copy `.env.example` and rename to `.env`
- Run Docker compose in detatched mode `npm run docker:up`

SHOULD BE GLOBAL CHANGE

TEST LOCAL CHANGE
TEST LOCAL CHANGE
TEST LOCAL CHANGE
TEST LOCAL CHANGE
TEST LOCAL CHANGE
TEST LOCAL CHANGE
