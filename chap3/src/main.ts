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

// 3.2 
type FooBar = {
    foo: number,
    bar: string,
};

const fb: FooBar = {
    foo: 123,
    bar: "123",
};
// type はobj以外もOK
type SuperName = string;
const myname: SuperName = "hoge";
console.log(myname, typeof(myname));

//3.2.4 interface
interface FooBarObj {
    foo: number,
    bar: string,
}

const foobarobj: FooBarObj = {
    foo: 123,
    bar: "123"
}

console.log(foobarobj);

// 3.2.6 optional type
type MyObj = {
    firstname: string,
    lastname: string,
    middlename?: string,
}

const erichi: MyObj = {
    firstname: "eri",
    lastname: "yukimura",
};
console.log(erichi);
console.log(erichi?.middlename);

const yuky: MyObj = {
    firstname: "yuki",
    lastname: "tanaka",
    middlename: "yuky",
};
console.log(yuky);
console.log(yuky?.middlename);

// 3.2.7 readonly
type roMyObj = {
    readonly name: string,
    age: number,
};
const roObj: roMyObj = {
    name: "test",
    age: 22,
};
console.log(roObj);
//roObj.name = "2"; // NG
roObj.age = 23; // OK
