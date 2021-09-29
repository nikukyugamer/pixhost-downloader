#!/bin/bash -xe

# - name: Node.js をインストールする
#   run: |
curl -sSL "https://nodejs.org/dist/v16.10.0/node-v16.10.0-linux-x64.tar.xz" | tar --strip-components=2 -xJ -C /usr/local/bin/ node-v16.10.0-linux-x64/bin/node
curl https://www.npmjs.com/install.sh | bash
echo 'インストールされた Node.js のバージョンは、'
node -v
echo 'インストールされた npm のバージョンは、'
npm -v

# - name: npm 自身をアップグレードする
#   run: |
echo 'アップグレード前の npm のバージョンは、'
npm --version
npm install -g npm
echo 'アップグレード後の npm のバージョンは、'
npm --version

# - name: npm-run-all をグローバルにインストールする
#   run: |
npm install -g npm-run-all
