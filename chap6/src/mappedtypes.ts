{
    // [P in K]: T
    type Fruit = "apple" | "orange" | "strawberry";

    // type FruitNumber = {
    //     apple: number;
    //     orange: number;
    //     strawberry: number;
    // }
    type FruitNumber = {
        [P in Fruit]: number
    };
    const numbers: FruitNumber = {
        apple: 3,
        orange: 5,
        strawberry: 10
    };
    console.log(numbers);
    
}

{
    // [P in K]: T
    type Fruit = "apple" | "orange" | "strawberry";

    type FruitNumber = {
        [P in Fruit]: P[]
    };
    const numbers: FruitNumber = {
        apple: ["apple", "apple"],
        orange: ["orange", "orange", "orange"],
        strawberry: [],
    };
    console.log(numbers);
    
}