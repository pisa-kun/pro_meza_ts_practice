{
    // Union T or U
    // T | U
    type Animal = {
        species: string,
        age: string,
    };

    type Human = {
        name: string,
        age: number,
    };

    // T | U
    // ユーザーは動物または人間
    type User = Animal | Human;

    const dog: User = {species: "dog", age:"22"};
    const michan: User = {name: "yuina", age:26};
    console.log(dog, michan);
    // 型上に存在するか不明なのでプロパティアクセスできない
    // console.log(dog.name, michan.species);

    function showAge(user: User){
        // ageはアクセスできる。返り値は string | number
        const age = user.age;
        console.log(age, typeof(age));
    }
    showAge(michan);
    showAge(dog);
}

{
    // 6.1.3 
    // インターセクション 交差型 T & U
    type Animal = {
        species: string,
        age: number,
    };

    // Animalのプロパティと name:string を必ず持つ必要がある
    type Human = Animal & {name: string};

    const tama: Animal = {
        species: "Felis silverstris catsu",
        age: 3,
    };

    const erihci: Human = {
        species: "Homo",
        age: 23,
        name: "yukimura",
    };
    console.log(erihci);

    const showAge = (animal: Animal) => console.log(`${animal.species} : ${animal.age}`);
    // Animalを渡しているので当然呼び出せる
    showAge(tama);
    // HumanはAnimalの部分型(拡張)なので、こちらも呼び出せる
    showAge(erihci);
}

{
    // 6.1.4
    type Human = {name: string};
    type Animal = {species: string};
    const getName = (human: Human) => human.name;
    const getSpecies = (anima: Animal) => anima.species;

    // ((human: Human) => string) | ((anima: Animal) => string)
    // つまり mysteryFunc: (arg0: Human & Animal) => string
    const mysteryFunc = Math.random() < 0.5 ? getName : getSpecies;
    const suzumon: Human = {name: "suzumoto"};
    const panda: Animal = {species: "panda"};
    
    // mysteryFunc: (arg0: Human & Animal) => string
    // 交差型を求められているので、Animal または Humanを渡せない
    // console.log(mysteryFunc(suzumon));
    // console.log(mysteryFunc(panda));

    const newage: Human & Animal = {
        name: "power",
        species: "new sex",
    };
    console.log(mysteryFunc(newage));
}

{
    // 6.1.6 optional chaining
    type GetTimeFunc = () => Date;
    function useTime(getTimeFunc: GetTimeFunc | undefined){
        // getTimeFuncがnull または undefinedでないときのみ関数呼び出し
        const timeOrUndefined = getTimeFunc?.();
    }

    type User = {
        isAdult(): boolean,
    }

    // userが存在して、かつisAdultの場合
    function checkForAdultUser(user: User | null){
        // if(user !== null && user.isAdult())
        if(user?.isAdult()){
            console.log(user);
        }
    }
    const user: User = {isAdult: () => true};
checkForAdultUser(user);
}