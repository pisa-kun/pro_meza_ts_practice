//4.2
{
    const xRepeat = (num:number):string => "x".repeat(num);
    // type (num:number) => string
    console.log(xRepeat(5), typeof(xRepeat));

    type F = (num: number) => string;
    const yRepeat: F =(num:number): string => "y".repeat(num);
    console.log(yRepeat(3));
}

// 4.2.4
{
    type F = (arg:number) => string;
    // この場合、numは型省略可能(tsconfigで型強制してる場合はエラー)
    //const xRepeat = (num) => "x".repeat(num);
}

// 4.2.5 コールシグネチャ
{
    type MyFunc = {
        isUsed?: boolean,
        (arg:number):string,
    };
    // プロパティもちの関数
    const double: MyFunc = (num: number) => "myFunc".repeat(num);
    double.isUsed = true;
    console.log(double(2), double.isUsed);
}