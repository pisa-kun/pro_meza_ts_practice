// 4.4
{
    type User<N> = {
        name:N
    };

    const numUser: User<number> = {name:24};
    console.log(numUser);
    const strUser: User<string> = {name:"hoge"};
    console.log(strUser);

    type FirstName = string;
    type FullName = {firstName: string, lastName: string};
    const fUser: User<FirstName> = {name:"firstname"};
    console.log(fUser);
    const fullUser: User<FullName> = {name:{firstName:"test", lastName:"test"}};
    console.log(fullUser);
}

// 4.4.2
{
    const repeat = <T>(element: T, length:number):T[] =>{
        const result: T[] = [];
        for(let i = 0; i < length; i++){
            result.push(element);
        }
        return result;
    }
    console.log(repeat<string>("honoke", 5));
    console.log(repeat<number>(39, 3));
}

// 4.4.4
{
    // 型引数Tをもち、引数にT型とnumberの2つの引数を受け取って、T型の配列を返す関数
    type Func = <T>(arg: T, num:number) => T[];
    const repeat: Func = (arg, num) => {
        let sum = [];
        for(let i = 0; i < num; i++){
            sum.push(arg);
        }
        return sum;
    }
    console.log(repeat<string>("a",3));
}