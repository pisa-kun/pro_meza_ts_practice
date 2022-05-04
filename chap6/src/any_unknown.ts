{
    // unknown
    const doNothing = (val: unknown) => {
        console.log(val);
        //console.log(val.name);
    }
    doNothing(1);
    doNothing("11");
    doNothing(true);
    doNothing([1,2,3]);
    doNothing(undefined);
    doNothing({name: "hono"});
    doNothing(() => console.log("aaa"));

    // unknownなのでtype user.name があってもアクセスできない
    type User = {name: string};
    const user: User = {name: "test"};
    doNothing(user);

    // 型絞り込みをつかってあげよう
    const useUnknown = (val: unknown) => {
        if(typeof val === "string"){
            console.log(val);
        }else{
            console.log("valは文字列以外");
        }
    }
    useUnknown("12345");
}