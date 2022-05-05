// npm install --save-dev express
// モジュール 'express' の宣言ファイルが見つかりませんでした。'C:/Develop/typescript/pro_ts/chap7/node_modules/express/index.js' は暗黙的に 'any' 型になります。
//   存在する場合は `npm i --save-dev @types/express` を試すか、`declare module 'express';` を含む新しい宣言 (.d.ts) ファイルを追加します
import express from "express";
{
    const app = express();


    app.get("/", (_, reply) => {
        reply.send("Hello, World");
    });

    app.listen(8008);
}