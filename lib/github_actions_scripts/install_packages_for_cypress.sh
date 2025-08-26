#!/bin/bash -xe

# https://docs.cypress.io/app/get-started/install-cypress#UbuntuDebian
# name: Cypress の実行に必要なパッケージをインストールする
# command: |
# sudo apt install -y libgtk2.0-0t64 libgtk-3-0t64 libgbm-dev libnotify-dev libnss3 libxss1 libasound2t64 libxtst6 xauth xvfb
sudo apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 libasound2t64 libxtst6 xauth xvfb
