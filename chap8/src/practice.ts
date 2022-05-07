
import path from "path";
import {readFile} from "fs/promises";
import { fileURLToPath } from "url";
import { exit } from "process";

const filePath = fileURLToPath(import.meta.url);
const fileDir = path.dirname(filePath);
const dataFile = path.join(fileDir, "../a.txt");

const sleep = (duration: number) => {
    return new Promise<void>((resolve) => {
        setTimeout(resolve, duration);
    });
}

const errorAfter1ms = async() => {
    await sleep(10);
    throw new Error("timeout");
}

try{
    // sleep(1000).then(() => {
    //     console.log("exit");
    //     process.exit();
    // })
    // const data = await readFile(dataFile, {encoding:"utf-8"});
    // console.log(data);

    const data = await Promise.race([
        readFile(dataFile, {encoding:"utf-8"}),
        errorAfter1ms(),
    ]);
    console.log(data);
}catch(err){
    console.log(err);
}
