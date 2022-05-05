import {user, User, GetUserNames} from "./sample.js";

console.log(`${user.name}, ${user.age}`);

{
    const userA: User = {name:"A", age:24};
    const userB: User = {name:"B", age:24};
    const userC: User = {name:"C", age:24};
    const userD: User = {name:"D", age:24};

    console.log(GetUserNames([userA, userB, userC, userD]));
}

import "./too.js";
import "./bar.js";
{
    // column moduleの実態は1つ
    // importもグローバルスコープで宣言
    //import { increment } from "./counter.js";

}

import {type Animal, type Cat, nekochan} from "./animal.js";
//import {nekochan} from "./animal.js";

{
    const tama: Cat = {
        species: "neko",
        age: 2,
        target: "goma",
    };
    console.log(tama);
    // catは型としてエクスポートしているので、値として出力できない
    //console.log(Cat);

    const myCat: Cat = {...nekochan};
    console.log(myCat);
    const neko: Cat = nekochan;
    console.log(neko);
}


import * as hoge from "./hoge.js"
{
    console.log(hoge.name, hoge.age);
    console.log(hoge.humna.name, hoge.humna.age);
}