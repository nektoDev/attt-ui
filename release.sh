#!/usr/bin/env bash
set -e

RELEASE=$1
if [ -z "$RELEASE" ]
  then
    RELEASE="minor"
fi
npm run build
npm run release:$RELEASE
VERSION=`jq '.version' package.json | tr -d '"'`
echo $VERSION
docker build --rm -t nektodev/attt-ui:$VERSION -t nektodev/attt-ui .
docker push nektodev/attt-ui
