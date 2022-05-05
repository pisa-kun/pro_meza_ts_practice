import {readFile} from "fs/promises"

{
    // 8.3.1

    // ret const p: Promise<string>
    const p = readFile("foo.txt", "utf-8");
    p.then((data) => {
        console.log("成功", data);
    }, (err: unknown) => {
        console.log("失敗", err);
    });

    // p.then((data) => {
    //     console.log("成功", data);
    // }).catch((err: unknown) => {
    //     console.log("失敗", err);
    // });
}

{
    // 8.3.4
    const p = new Promise<number>((resolve) => {
        setTimeout(() => {
            // 成功時に100が返ってくる
            resolve(100);
        }, 1000);
    });

    p.then((number) => {
        console.log(number);
    });
}