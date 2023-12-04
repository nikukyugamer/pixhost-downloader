#!/bin/bash -xe

# - name: Firefox をインストールする
#   run: |
sudo snap remove --purge firefox
sudo apt remove --autoremove firefox
sudo add-apt-repository ppa:mozillateam/ppa
sudo cp lib/github_actions_scripts/99mozillateamppa /etc/apt/preferences.d

sudo apt update
sudo apt install -y firefox
