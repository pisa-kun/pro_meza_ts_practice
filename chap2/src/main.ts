import{createInterface} from 'readline';

// const rl = createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// 2.2.4
let greet: string = "Hello, ";
greet += "World";
console.log(greet);

console.log(0.1 + 0.2);

// 2.3.4 bigInt
const bignum: bigint = (123n + 456n) * 2n;
console.log(bignum);

// 2.3.5
const message: string = `Hello,
World`;
console.log(message);

const str1: string = "Hello";
const str2: string = "World";
console.log(`${str1},${str2}`);
console.log(`123 + 234 =${123 + 234}`);

// 2.3.8
const n: null = null;
const u: undefined = undefined;
console.log(n, u);

// rl.question("文字列を入力してね\n", (str: string) => {
//     //console.log(`${str}が入力されたぽよ`);
//     if(!Number.isNaN(parseInt(str))){
//         console.log(123 + Number(str));
//     }else{
//         console.log(`${str}が入力されたぽよ`);
//     }
//     rl.close();
// });


// 2.4.6
const name = "";
// 左辺がfalseの場合、右辺を評価
const result = name || "名無し";
console.log(result);
// 左辺がfalseの場合、左辺を評価
console.log(name && "名無し");

const name2 = "hoge";
// 左辺がtrueの場合、右辺を評価
console.log(name2 && "名無し");
// 左辺がtrueの場合、左辺を評価
console.log(name2 || "名無し");

const secret = undefined;
console.log(`secretが空なら右辺の値を評価 : ${secret ?? "default"}`);


// 2.6 FizzBuzz
const fizzBuzz = (num: number): string => {
    if(num === 0){
        return "fizzでもbuzzでもない";
    }else if(num % 15 === 0){
        return "fizzbuzz";
    }else if(num % 3 === 0){
        return "fizz";
    }else if(num % 5 === 0){
        return "buzz";
    }else{
        return "fizzでもbuzzでもない";
    }
}

for(let i = 0; i < 100; i++){
    console.log(`${i}は ,${fizzBuzz(i)}`);
}