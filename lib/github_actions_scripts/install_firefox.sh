#!/bin/bash -xe

# - name: Firefox をインストールする
#   run: |
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys A6DCF7707EBC211F
sudo apt-add-repository "deb http://ppa.launchpad.net/ubuntu-mozilla-security/ppa/ubuntu jammy main"
sudo apt update
sudo apt install -y firefox
