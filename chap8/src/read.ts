import {readFile} from "fs";

export const readsample = () => { 
    console.log("関数呼び出し");
    readFile("foo.txt", "utf-8", (err, result) => {
        if(err){
            console.log("err");
            return;
        }
        console.log(result);
    });
    console.log("読み込み開始");
}