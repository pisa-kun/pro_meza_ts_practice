const user = {
    name: "uhyo",
    age: 25,
};
console.log(user);
console.log(user.name);
console.log(user["name"]);
user.age = 26;
console.log(user);

// 3.1.5 spred
const obj1 = {
    bar: 456,
    baz: 789,
};
const obj2 = {
    foo: 123,
    ...obj1,
};
console.log(obj2);

// オブジェクトの代入はアドレスを渡すイメージ
const foo = {num:1};
const bar = foo;
console.log(foo === bar); // true
console.log(foo);
bar.num = 0;
console.log(foo, bar);
console.log(foo === bar); // true

// 回避する場合はスプレッド構文でコピーを渡す
const f = {num:1};
const b = {...f};
console.log(f === b);
console.log(f);
b.num = 111;
console.log(f, b);
console.log(f === b);
