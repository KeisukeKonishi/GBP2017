# GBP2017
- beer party用アプリ
## 環境構築
* NodeJS
    * インストール＆デプロイ  
    適当な場所に『GBP2017』としてデプロイ
    * モジュールインストール  
    `npm install`
* MongoDB  
    * インストール  
    `brew install mongo`
    * バックエンドで起動  
    `mongod --fork --dbpath (dbpath) --logpath (logpath)`  
    ※pathはconfigファイルで確認
    * DB, テーブル作成  
    DB名：`GBP2017`  
    テーブル名：`beerList`  
    ※mongoシェルで操作  
    `mongo`  
    `> use GBP2017`  
    `> db.createCollection(beerList)`
    * データ追加  
    JSファイル：initdb.js  
    ※mongoシェルで操作  
    `mongo`  
    `> use GBP2017`  
    `> load("initdb.js")`
## 起動
* NodeJS起動  
    `node bin/www`
* データ取得  
    リクエスト先（GET）:`http://(ipAddress:port)/beers`  
    ※配列でまとめて取得（各要素はinitdb.jsのJSONデータ）