#!/bin/bash -xe

# - name: 基本パッケージのインストールを行う
#   run: |
sudo apt update --allow-releaseinfo-change
sudo apt install -y gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc-s1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libnss3 lsb-release xdg-utils wget lsof gcc g++ make

# - name: libffi7 対策（ワークアラウンド）
#   run: |
sudo ln -s /usr/lib/x86_64-linux-gnu/libffi.so.7.1.0 /usr/lib/x86_64-linux-gnu/libffi.so.6

# - name: 日本語フォントのインストールを行う
#   run: |
sudo apt install -y fonts-ipaexfont
