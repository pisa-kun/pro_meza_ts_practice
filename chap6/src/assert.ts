{
    const getFirstFiveLetters = (strOrNum: string | number) => {
        const str = strOrNum as string;
        return str.slice(0, 5);
    }

    console.log(getFirstFiveLetters("sirokuro"));
    // string型としてランタイムに認識させるだけなので sliceでエラーになる
    try{
    console.log(getFirstFiveLetters(1234567));
    }catch(err){
        console.log(err);
    }

    type Animal = {
        tag: "animal";
        species: string,
    };

    type Human = {
        tag: "human";
        name: string;
    };

    type User = Animal | Human;

    const getNamesIfAllHuman = (users: readonly User[]): string[] | undefined => {
        // if(users.every(user => user.tag === "human")){
        //     // コンパイラはusersの中にanimalが入っているかもしれないと認識する
        //     return users.map(user => user.name);
        // }
        if(users.every(user => user.tag === "human")){
            // コンパイラに usersの中身はすべて Humanであることを教えるためのas
            return (users as Human[]).map(user => user.name);
        }
        return undefined;
    }
}

{
    // strings[]
    const names1 = ["aaa", "bbb", "ccc"];
    // 文字列リテラル型になる
    // readonly ["aaa", "bbb", "ccc"]
    const names2 = ["aaa", "bbb", "ccc"] as const;
    
    // lookupとtypeofキーワードの複合でリテラルの or 型を作れる
    //"aaa" | "bbb" | "ccc"
    type name = (typeof names2)[number];
}