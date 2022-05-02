{
    // 巻き上げ
    console.log(range(5,10));

    function range(min: number,max: number) :number[] {
        let array = [];
        for(let i = min; i < max; i++){
            array.push(i);
        }
        return array;
    }
    console.log(range(0, 10));
}

{
    type Human = {
        height: number,
        weight: number,
    }
    const calcBMI = function(human: Human): number{
        return human.weight / human.height ** 2;
    }
    const hitomin = {height:1.55, weight:50};
    console.log(calcBMI(hitomin));
}

// 4.1.4
{
    type Human = {
        height: number,
        weight: number,
    }
    // const calcBMI = ({
    //     height, weight
    // }:Human): number => {
    //     return weight / height **2;
    // }
    const calcBMI = ({height, weight}:Human): number => weight / height **2;
    console.log(calcBMI({height:1.83, weight:72}));
}

// 4.1.6
{
    const obj = {
        age:10,
        double(num: number): number{
            return num * 2;
        },

        // アロータイプ
        double2:(num: number):number => num*2 + obj.age,
    };
    console.log(obj.double2(2));
}

// 4.1.9
{
    const toLowerOrUpper = (str: string, upper: boolean = false):string => 
        upper ?  str.toUpperCase() : str.toLowerCase();
    console.log(toLowerOrUpper("AbcdeEfghijkLMN")); // default undefined => false
    console.log(toLowerOrUpper("AbcdeEfghijkLMN", true));
}

// 4.1.10 callback
{
    type User = {name: string, age: number};
    const users: User[] = [
        {name: "harusu", age:27},
        {name: "honoke", age:27},
    ];
    //
    const names = users.map((u:User):string => u.name);
    // function getName(u:User) : string{
    //     return u.name;
    // }
    console.log(names);

    const adultUsers = users.filter((u:User) => u.age >= 20);
    console.log(adultUsers);
    const allAdult = users.every((u:User) => u.age >= 20);
    console.log(allAdult);

}