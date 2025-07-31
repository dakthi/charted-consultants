#!/bin/bash

# --- CONFIG ---
VPS_HOST="178.128.41.146"
VPS_USER="root"
REMOTE_DIR="/root/docker-images"
LOCAL_TMP_DIR="$HOME/docker-images"
IMAGE_NAME="charted"
TAG="latest"
ARCH="linux/amd64"

# --- BUILD IMAGE LOCALLY ---
echo ">>> Building Docker image: $IMAGE_NAME:$TAG"
docker buildx build --platform $ARCH -t $IMAGE_NAME:$TAG --load .

# --- SAVE & COMPRESS IMAGE ---
echo ">>> Saving and compressing image..."
mkdir -p "$LOCAL_TMP_DIR"
docker save $IMAGE_NAME:$TAG | gzip > "$LOCAL_TMP_DIR/$IMAGE_NAME.tar.gz"

# --- COPY TO VPS ---
echo ">>> Copying to VPS: $VPS_USER@$VPS_HOST:$REMOTE_DIR"
scp "$LOCAL_TMP_DIR/$IMAGE_NAME.tar.gz" $VPS_USER@$VPS_HOST:$REMOTE_DIR/

# --- SSH INTO VPS & LOAD IMAGE ---
echo ">>> Loading image inside VPS"
ssh $VPS_USER@$VPS_HOST "gunzip -c $REMOTE_DIR/$IMAGE_NAME.tar.gz | docker load"

echo ">>> Done! You can now run it on VPS with:"
echo "docker run -d --name charted -p 3000:3000 $IMAGE_NAME"

