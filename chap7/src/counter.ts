let value = 0;

console.log("running counter.ts");

export function increment() {
    return ++value;
}

// scopeの中でexportできない
// {
//     let value = 0;

//     console.log("running counter.ts");

//     export function increment() {
//     return ++value;
//     }
// }