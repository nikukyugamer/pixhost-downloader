#!/bin/bash -xe

# - name: Firefox をインストールする
#   run: |
sudo snap remove --purge firefox
sudo apt remove --autoremove firefox
sudo add-apt-repository ppa:mozillateam/ppa

sudo echo "Package: firefox*" >> /etc/apt/preferences.d/99mozillateamppa
sudo echo "Pin: release o=LP-PPA-mozillateam" >> /etc/apt/preferences.d/99mozillateamppa
sudo echo "Pin-Priority: 501" >> /etc/apt/preferences.d/99mozillateamppa
sudo echo "" >> /etc/apt/preferences.d/99mozillateamppa
sudo echo "Package: firefox*" >> /etc/apt/preferences.d/99mozillateamppa
sudo echo "Pin: release o=Ubuntu" >> /etc/apt/preferences.d/99mozillateamppa
sudo echo "Pin-Priority: -1" >> /etc/apt/preferences.d/99mozillateamppa

sudo apt update
sudo apt install -y firefox
