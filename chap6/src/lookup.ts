{
    type Human = {
        type: "human",
        name: string,
        // age: number,
        age: bigint,
    };

    // age の型は変更しなくてもOK
    const setAge = (human: Human, age: Human["age"]) => {
        return {
            ...human,
            age
        };
    }

    const chisa: Human = {
        type: "human",
        name: "suganuma",
        // age: 29,
        age: 29n,
    };

    // const newc = setAge(chisa, 22);
    const newc = setAge(chisa, 22n);
    console.log(newc);
}