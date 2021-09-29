#!/bin/bash -xe

# - name: Google Chrome のインストールを行う
#   run: |
curl -sS -L https://dl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" | sudo tee /etc/apt/sources.list.d/google.list
sudo apt update -q -y --allow-releaseinfo-change
sudo apt install -y google-chrome-stable
