// 8.3.5
{
    const p = Promise.resolve(100);
    
    p.then((data) => {
        console.log("result is ", data);
    });
    console.log("1");
}
import {readFile} from "fs/promises"
// 8.3.6
{
    const p = Promise.all([
        readFile("a.txt", "utf-8"),
        readFile("b.txt", "utf-8"),
        readFile("c.txt", "utf-8"),
    ]);
    
    p.then((result) => {
        const [a, b, c] = result;
        console.log("a.txt : ", a);
        console.log("b.txt : ", b);
        console.log("c.txt : ", c);
    });
}