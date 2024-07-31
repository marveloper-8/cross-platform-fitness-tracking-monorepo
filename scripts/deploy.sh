#!/bin/bash

cd "$(dirname "$0")/.."

docker build -t your-registry/fitness-tracker-server:latest -f docker/server.Dockerfile packages/server
docker build -t your-registry/fitness-tracker-client:latest -f docker/client.Dockerfile packages/client

docker push your-registry/fitness-tracker-server:latest
docker push your-registry/fitness-tracker-client:latest

kubectl apply -f k8s/

kubectl rollout status deployment/fitness-tracker-server
kubectl rollout status deployment/fitness-tracker-client

echo "Deployment complete!"