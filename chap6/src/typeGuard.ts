{
    const isStringOrNumber = (value: unknown): value is string | number => {
        return typeof value === "string" || typeof value === "number";
    }
    const something: unknown = 123;
    if(isStringOrNumber(something)){
        console.log(something.toString());
    }
}

{
    type Human = {
        type: "Human",
        name: string,
        age: number,
    };

    // 関数が例外を投げずに無事に終了したならば、型述語の条件が満たされる
    // 例外がでなければ、valueはHumanであると見なされる
    //const assertHuman = (value: any) => {
    // アロー演算子だとエラーになるので注意
    function assertHuman(value: any): asserts value is Human{
        if(value == null){
            throw new Error("null or undefined");
        }

        if(
            value.type !== "Human" ||
            typeof value.name !== "string" ||
            typeof value.age !== "number"
        ){
            throw new Error("value is not a Human");
        }
    }

    const checkAndUserHuman = (value: unknown) => {
        assertHuman(value);
        // ここから下はvalueがHumanになる
        const name = value.name;
        const age = value.age;
    }
}