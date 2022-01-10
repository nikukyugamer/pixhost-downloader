# pixhost-downloader
- PiXhost downloader

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
$ npx COMMAND_NAME
```

#### シンボリックリンクを削除する
不要になった場合にはシンボリックリンクを削除する。

```
$ npm unlink pixhost-downloader
```
