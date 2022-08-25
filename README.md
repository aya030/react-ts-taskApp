# React × TypeScript で Task 管理アプリの作成

## できること

1. input で入力 →[Task を追加]で未完了リストへ追加される
2. 未完了リストから[完了]で完了リストへ追加される
3. 完了リストから[戻す]で未完了リストへ戻る
4. 未完了、完了リストから[削除]でリストから削除される

## やったこと

1. 一意のIDを取得するため`ulid`をインストールして使用した
2. Jsonサーバーを利用し、`mock.json`ファイルと連携

## project の使い方

```

git clone https://github.com/aya030/react-ts-taskApp.git
cd react-ts-taskApp
npm install
npm start

```

同時にモックサーバーを起動する
`npx json-server --watch db.json --port 3100`

http://localhost:3100/tasks

で一覧を取得

## 環境

React17
TypeScript
Tailwind CSS


### 参考資料

#### モックサーバーの起動とリソース処理

> https://www.codegrid.net/articles/2017-json-server-1/#toc-4

#### ulid install

https://www.npmjs.com/package/ulid
