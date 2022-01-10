# pixhost-downloader
- PiXhost downloader

# 使い方

```bash
$ pixhost_downloader -u "https://pixhost.to/show/228/126849268_picturepub-iskra-lawrence-006.jpg" -d "~/"
```

#### ヘルプ

```bash
$ npx pixhost_downloader --help
Usage: pixhost_downloader [options]

Options:
  -u, --url <url>        A image URL on PixHost
  -d, --dir <directory>  A directory to save the image (default: "/tmp")
  -h, --help             display help for command
```

# Cypress
- https://dashboard.cypress.io/projects/uitg61/runs

# 開発方法（ローカル実行方法）

#### シンボリックリンクを作って npx で実行できるようにする
`~/.nodenv/versions/16.13.1/lib/node_modules` などの場所にシンボリックリンクを作ってくれる。

```bash
$ npm link
```

#### コマンドを実行する
- シンボリックリンクがあるのでコマンドが実行できる
- シンボリックリンクなので直接の実行はできず、`npx` を付与する必要がある

```bash
$ npx pixhost_downloader -u "https://pixhost.to/show/228/126849268_picturepub-iskra-lawrence-006.jpg" -d "~/"
```

#### シンボリックリンクを削除する
不要になった場合にはシンボリックリンクを削除する。

```
$ npm unlink pixhost-downloader
```
