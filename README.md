# KLS GIT — Applications Directory

React (Vite) frontend listing every application used at KLS Gogte Institute of Technology.

## Develop

```bash
npm install
npm run dev       # http://localhost:5173
```

## Build & deploy

```bash
npm run build     # outputs static files to dist/
```

The built site is in `dist/`; all paths are relative, so it works from any folder.

## Add / edit an app

Edit `src/apps.js`. Each entry has a name, description, URL, logo (file in `public/logos/`),
category, audience, `access` (`public` | `intranet`) and `status` (`active` | `legacy`).

## Deploying to the VPS (manual)

1. On your PC: commit and `git push` to GitHub.
2. On the VPS: `cd /var/www/git-apps-portal && ./deploy.sh`

`deploy.sh` pulls the latest code, installs dependencies and rebuilds `dist/`, which Nginx serves.
