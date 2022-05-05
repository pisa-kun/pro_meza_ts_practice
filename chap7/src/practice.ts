import * as fs from "fs";
import path from "path";
import {fileURLToPath} from "url";

{
// 実行ファイルのパスを返す
const filePath = fileURLToPath(import.meta.url);
console.log(`filePath:${filePath}`);
const fileDir = path.dirname(filePath);
console.log(`fileDir:${fileDir}`);
// 実行ファイルが置いてあるディレクトリパス + ファイル置き場を返す
const dataFile = path.join(fileDir, "../test.txt");
console.log(`dataDile:${dataFile}`);

    fs.readFile(dataFile, "utf-8", (err, text)=> {
        if(err) {throw err;}
        console.log(text);
        // text.matchでマッチした要素を配列で返すので
        // その長さを返す
        // flags?: string | undefined で"g"を渡すことで、2番目3番目も返す
        const count = text.match(new RegExp("Test", "g") || [])?.length;
        console.log(count);
    });
}