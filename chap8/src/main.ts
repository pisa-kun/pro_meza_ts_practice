import {readsample} from "./read.js"

{
    console.log("はじまるよ");
    setTimeout(() => {
        console.log("タイマーがよばれた");
    }, 3000);
    console.log("タイマーを設定しました");
}

{
    readsample();
}