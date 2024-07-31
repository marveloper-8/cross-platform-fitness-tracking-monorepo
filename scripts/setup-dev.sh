#!/bin/bash

npm install

npx lerna bootstrap

cd packages/server
cp .env.example .env
npm run build

cd ../client
npm run build

echo "Development environment setup complet!"