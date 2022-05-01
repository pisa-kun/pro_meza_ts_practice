// 3.3
type FooBarr ={
    foo: string,
    bar:number,
};

type FooBarBaz = {
    foo:string,
    bar:number,
    baz:boolean,
};

const fbb: FooBarBaz = {
    foo: "f1",
    bar: 1,
    baz: false,
};
const fb2: FooBarr = fbb;
console.log(fb2);