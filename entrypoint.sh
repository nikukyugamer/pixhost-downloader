#!/bin/bash

USER_ID=${LOCAL_UID:-9001}
GROUP_ID=${LOCAL_GID:-9001}

echo "[LOG] 次の UID および GID でコンテナが実行されます"
echo "[LOG] UID: $USER_ID / GID: $GROUP_ID"

useradd -u "$USER_ID" -o -m user
groupmod -g "$GROUP_ID" user

# su コマンドだとエラーになる（特定のツールに依存するのは避けたいとは思いつつ）
gosu user /app/bin/pixhost_downloader.js "$@"
