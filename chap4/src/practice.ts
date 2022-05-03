// 4.6
{
    // FizzBuzzを関数化する
    const getFizzBuzzString = (num: number): string => {
        if(num === 0){
            return `${num}はFizzBuzzではありません`;
        }

        if(num % 15 === 0){
            return `${num}はFizzBuzz`;
        }else if(num % 3 === 0){
            return `${num}はFizz`;
        }else if(num % 5 === 0){
            return `${num}はBuzz`;
        }else{
            return `${num}はFizzBuzzではありません`;
        }
    }

    for(let i = 0; i <= 100; i++){
        const message = getFizzBuzzString(i);
        console.log(message);
    }

    // for文ではなくfor element in arrayをできるような関数を作成
    type Func = (first:number, last:number) => number[];
    const sequence: Func = (first, last) => {
        let array = [];
        for(let i = first; i <= last; i++){
            array.push(i);
        };
        return array;
    }
    console.log("Question2");
    for(const i of sequence(1,100)){
        const message = getFizzBuzzString(i);
        console.log(message);
    }
}

{
    // 4.6.3 コールバック関数の復習
    // 配列Tと関数を受け取って、配列に対して関数を適用して、返り値を集めてできた新しい配列を作って返す関数
    // コールバック関数は、ある型の値を受け取って、その型の値を返す関数
    function map(array: number[], callback: (num:number) => number) :number[]{
        let result: number[] = [];
        for(const element of array){
            result.push(callback(element));
        }
        return result;
    };

    const data = [1,1,2,3,5,8,13];
    const result = map(data, (x) => x * 10);
    console.log(result);
}

{
    // 4.6.3 コールバック関数の復習
    // 配列Tと関数を受け取って、配列に対して関数を適用して、返り値を集めてできた新しい配列を作って返す関数
    // コールバック関数は、ある型の値を受け取って、その型の値を返す関数
    function map<T>(array: T[], callback: (arg:T) => T) :T[]{
        let result: T[] = [];
        for(const element of array){
            result.push(callback(element));
        }
        return result;
    };

    const data = [1,1,2,3,5,8,13];
    const result = map(data, (x) => x * 10);
    console.log(result);

    const str = ["a", "b", "c", "d", "e"];
    const strresult = map<string>(str, (s) => s + s + s);
    console.log(strresult);

    type User = {
        name: string,
        age: number,
    };
    const members: User[] = [
        {name: "wakuwaku", age:27},
        {name: "tuchi", age:26},
        {name: "honoke", age:27},
        {name: "harusu", age:27},
    ];
    const memresult = map<User>(members, (user) => {
        return {
            name: `${user.name} ${user.name}`,
            age: user.age * 2,
        }
    });

    console.log(memresult);
}