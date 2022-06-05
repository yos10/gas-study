# N 予備校【2022 年度】プログラミング入門 Web アプリ 付録 実践編 11. Google Apps Script

## Docker で Clasp を使えるようにする

https://github.com/google/clasp

Clasp を使うとローカルで Apps Script の開発、コードを Git で管理できるようになるのでメモ。

- root だと clasp clone した時に開けないファイル(.clasp.json)があった(docker compose up で失敗する)ので Dockerfile に USER を指定。

- clasp clone した時になぜか src 以下に .clasp.json がつくられた。

  ```
  node@5af062333e06:~/app$ clasp push
  No valid /home/node/app/.clasp.json project file. You may need to `create` or `clone` a project first.
  ```

  このファイルはプロジェクトフォルダ直下に存在しないと clasp push ができないので、手動で移動した。

  ```
  ~/workspace/gas-study (main)
  $ tree -a -I '.git'
  .
  ├── .clasp.json
  ├── .clasprc.json
  ├── .gitignore
  ├── Dockerfile
  ├── README.md
  ├── docker-compose.yml
  └── src
      ├── appsscript.json
      └── コード.js
  ```

## 毎回 clasp login するのを省略

1. 一度コンテナ内で `clasp login --no-localhost` でログインして `~/.clasprc.json` ファイルをつくる
1. 新しく端末を開き `docker ps` で CONTAINER ID を確認
1. `docker cp CONTAINERID:/home/node/.clasprc.json ~/.clasprc.json` で .clasprc.json をローカルにコピー
1. 作業フォルダに移動し .clasprc.json をカレントディレクトリにコピー `cp ~/.clasprc.json .`
1. Dockerfile の 8 行目のコメントを解除してイメージをビルドし直す `docker compose up -d --build`
1. 次にコンテナを再起動したときは clasp login しなくてよくなる。他のコンテナで作業するときは手順の 4,5

参考にしたページ  
https://github.com/google/clasp/issues/296#issuecomment-417020145

## clasp clone

1. `mkdir src`
1. GAS のスクリプトエディタの左側にある歯車アイコン(プロジェクトの設定)をクリックして、スクリプト ID をコピー
1. `clasp clone "スクリプトID" --rootDir src`

## clasp pull

`clasp pull` コードをローカルに持ってくる

## clasp push

`clasp push -w` ウォッチモード(保存したら自動で push)
