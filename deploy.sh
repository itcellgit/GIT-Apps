#!/usr/bin/env bash
# Run on the VPS from the project folder: ./deploy.sh
# Pulls the latest code from GitHub and rebuilds the site into dist/ (served by Nginx).
set -euo pipefail
cd "$(dirname "$0")"

git pull --ff-only
npm ci
npm run build

echo "Deployed commit $(git rev-parse --short HEAD) at $(date)"
