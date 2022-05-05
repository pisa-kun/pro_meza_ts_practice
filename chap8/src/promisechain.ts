// 8.3.
import {readFile} from "fs/promises";
{
    const p = readFile("a.txt", "utf-8");
    const p2 = p.then((result) => result + result);

    p2.then((result) => {
        console.log(result);
    });
}

{
    console.log("chain start");
    const repeat10 = (str: string) => 
        new Promise<string>((resolve) => {
            setTimeout(
                () => resolve(str.repeat(10)),
            1000);
        });

    readFile("c.txt", "utf-8")
    .then((result) => repeat10(result))
    .then((result) => {
        console.log(result);
        // exceptionがでるので、次のチェーンしているcarchが捕捉する。
        throw new Error("error!");
    })
    .then(() => console.log("ここにはこないよ"))
    .catch((err) => console.log(err));
}