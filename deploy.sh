#!/bin/bash

TARGET=$1
DEPLOY_DIR=""

if [ "$TARGET" == "prod" ]; then
  DEPLOY_DIR="/home/rashad_user/web/smile.cleaning/public_html"
elif [ "$TARGET" == "staging" ]; then
  DEPLOY_DIR="/home/rashad_user/web/staging.smile.cleaning/public_html"
else
  echo "Unknown target: $TARGET"
  exit 1
fi

# Clear the contents of the target directory except for the 'wp' folder
ssh root@77.37.86.138 << EOF
  find $DEPLOY_DIR -mindepth 1 -maxdepth 1 ! -name 'wp' -exec rm -rf {} +
EOF

# Deploy the new build
scp -r public/* root@77.37.86.138:$DEPLOY_DIR
