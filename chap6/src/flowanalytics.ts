{
    type SignType = "plus" | "minus";
    const signNumber = (type: SignType) => type === "plus" ? 1 : -1;

    const numberWithSign = (num: number, type: SignType | "none") => {
        if(type === "none"){
            // typeは"none"型
            return 0;
        }
        // typeは SignType型
        // signNumber("none"); "none"が入ることはない。ちなみに、noneだとコンパイルエラー
        return num * signNumber(type);
    }

    console.log(numberWithSign(5, "plus")); // 5
    console.log(numberWithSign(5, "minus")); // -5
    console.log(numberWithSign(5, "none")); // 0
}

{
    // 6.3.2 typeof
    console.log(typeof "test");
    console.log(typeof 26);
    console.log(typeof {});
    console.log(typeof undefined);

    const formatNumberOrString = (value: string | number) => {
        if(typeof value === "number"){
            // value は number型確定になる
            console.log(typeof value);
            // number型のメソッドが使える
            return value.toFixed(3);
        }
        return value;
    }
    console.log("formatNumberOrString() call");
    console.log(formatNumberOrString("test"));
    console.log(formatNumberOrString(3.14));
}

{
    // 6.3.3
    type Animal = {
        tag: "animal",
        species: string,
    };

    type Human = {
        tag: "human",
        name: string,
    };

    type User = Animal | Human;

    const tama: User = {
        tag: "animal",
        species: "Cat",
    };

    const waksama: User = {
        tag: "human",
        // tag: "human"にspeciesプロパティは存在しない
        //species: "Human",
        name: "marusan",
    };

    // tagには humanかanimalしかセットできない
    // const alien: User = {
    //     //tag: "test",
    // }

    const getUserName = (user: User) => {
        if(user.tag === "human"){
            // tag human で絞っているので、Humanに絞り込みされてHuman.nameが使える
            return user.name;
        }
        // Animal type
        return "名無し";
    }

    console.log(getUserName(tama));
    console.log(getUserName(waksama));

    // タグ絞り込みはifよりもswitchのほうがいいとか
    const getswitchUserName = (user: User) => {
        switch(user.tag){
            case "human":
                return user.name;
            case "animal":
                return "名無し";
        }
    }
}

{
    // 6.3.4
    type Animal = {
        tag: "animal",
        species: string,
    };

    type Human = {
        tag: "human",
        name: string,
    };

    type Robot = {
        tag: "robot",
        name: string,
    };

    type User = Animal | Human | Robot;

    // "robot"が引数に渡された場合、返り値がundefinedになってしまう
    // 対処として、返り値を書かない(推論で string | undefined)か明示的に書く
    // const getUserName = (user: User): string => {
    //     switch(user.tag){
    //         case "human":
    //             return user.name;
    //         case "animal":
    //             return "名無し";
    //         // case "robot":
    //         //     return `CPU ${user.name}`;
    //     }
    // }

    const getUserName = (user: User): string => {
        switch(user.tag){
            case "human":
                return user.name;
            case "animal":
                return "名無し";
            case "robot":
                return `CPU ${user.name}`;
        }
    }
    
}