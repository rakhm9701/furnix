#!/bin/bash
set -euo pipefail

cd "$(dirname "$0")"

BRANCH="${DEPLOY_BRANCH:-master}"

git fetch origin "$BRANCH"
git checkout -B "$BRANCH" "origin/$BRANCH"
git reset --hard "origin/$BRANCH"

if docker compose version >/dev/null 2>&1; then
	COMPOSE=(docker compose)
elif command -v docker-compose >/dev/null 2>&1; then
	COMPOSE=(docker-compose)
else
	echo "Docker Compose is not installed"
	exit 1
fi

"${COMPOSE[@]}" up -d --build
"${COMPOSE[@]}" ps
