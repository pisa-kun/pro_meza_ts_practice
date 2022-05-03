// 4.5
{
    const repeatLenght = 5;
    const repeat = <T>(element: T): T[] => {
        let array = [];
        for(let i = 0; i < repeatLenght; i++){
            array.push(element);
        }
        return array;
    }
    type MyUser = {
        name: string,
        age: number,
    };
    // console.log(repeat({
    //     name: "suzumon",
    //     age: 24,
    // }));
    console.log(repeat<MyUser>({
        name: "suzumon",
        age: 24,
    }));

    // 型推論
    console.log(repeat({
        generic: "generic"
    }));
    console.log(repeat(1));
}