# pixhost-downloader
- PiXhost downloader

# 使い方（ローカルで実行する場合）

```bash
$ git clone https://github.com/nikukyugamer/pixhost-downloader
$ cd pixhost-downloader
$ yarn install
$ npm link
$ npx pixhost_downloader -u "https://pixhost.to/show/228/126849268_picturepub-iskra-lawrence-006.jpg" -d "~/"
```

```bash
$ npx pixhost_downloader --help
Usage: pixhost_downloader [options]

Options:
  -u, --url <url>        A image URL on PixHost
  -d, --dir <directory>  A directory to save the image (default: "/tmp")
  -h, --help             display help for command
```

# 使い方（Docker で実行する場合、かつ、イメージを自分でビルドする場合）

### イメージを作成
- まずはイメージを作成する
- 266MB と結構大きなサイズなので、ここは見直したい

```bash
$ git clone https://github.com/nikukyugamer/pixhost-downloader
$ cd pixhost-downloader
$ docker image build --tag pixhost_downloader:latest .
```

### 実行する
- コンテナは実行後にすぐに削除されるので、コンテナの削除には気を使わなくて良い
- 都合上、コマンドはとても長大になるのでいくつかの注意点がある

#### 1. 画像を保存するディレクトリは予め作っておく必要がある
- 予めディレクトリを作っておかないと権限が `root` になってしまい取り扱いが難しくなる

#### 2. コンテナ側のダウンロードディレクトリは /tmp/pixhost_downloader で固定する（コピペで OK）
- 一時的なディレクトリなのでどこを指定してもよいが、権限の問題があるので `/tmp/pixhost_downloader` で固定した方が何も考えずに済むので楽

#### 3. コンテナ側の環境変数で LOCAL_UID と LOCAL_GID を指定する（コピペで OK）
- 権限の問題上 `LOCAL_UID` と `LOCAL_GID` の 2つ の環境変数をコンテナ側で指定する必要がある
- 書式は決まりきっているのでコピペで OK

#### 4. コマンドを実行する
- 以上を踏まえた上でコマンドを実行する
- 下記の `$HOME/HOZON_SURU_DIRECTORY` が保存ディレクトリになり、**このディレクトリは予め作成しておく必要がある**
- 下記の `https://pixhost.to/show/228/126849268_picturepub-iskra-lawrence-006.jpg` が対象の URL となる
- 上記以外はコピペをすれば良い
  - 短縮コマンドなどを作成すると便利かもしれない

```bash
$ docker container run --rm -e LOCAL_UID=$(id -u $USER) -e LOCAL_GID=$(id -g $USER) -v $HOME/HOZON_SURU_DIRECTORY:/tmp/pixhost_downloader pixhost_downloader:latest -u https://pixhost.to/show/228/126849268_picturepub-iskra-lawrence-006.jpg -d /tmp/pixhost_downloader
```

#### イメージを削除
不要になった場合やイメージを更新する際にはイメージを削除する。

```bash
$ docker image rm pixhost_downloader:latest
```

# Cypress
- https://dashboard.cypress.io/projects/uitg61/runs

# 開発方法（ローカル実行方法）

### シンボリックリンクを作って npx で実行できるようにする
`~/.nodenv/versions/16.13.1/lib/node_modules` などの場所にシンボリックリンクを作ってくれる。

```bash
$ npm link
```

### コマンドを実行する
- シンボリックリンクがあるのでコマンドが実行できる
- シンボリックリンクなので直接の実行はできず、`npx` を付与する必要がある

```bash
$ npx pixhost_downloader -u "https://pixhost.to/show/228/126849268_picturepub-iskra-lawrence-006.jpg" -d "~/"
```

### シンボリックリンクを削除する
不要になった場合にはシンボリックリンクを削除する。

```
$ npm unlink pixhost-downloader
```
