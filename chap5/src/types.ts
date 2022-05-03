
{
    class User {
        name:string = "";
        age:number = 0;

        isAdult():boolean{
            return this.age > 20;
        }
    }

    //OK
    const a: User = new User();

    // name:string, age:numberのプロパティをもち
    // isAdult:booleanというメソッドをもつオブジェクトならUser扱い
    const b: User = {
        name: "test",
        age:22,
        isAdult: () => true,
    };
}

{
    // 5.2.3
    class User{
        name:string ="";
        age:number = 0;
    }
    const userA = new User();
    console.log(userA instanceof User);
    console.log({} instanceof User);

    const userB: User = {
        name: "",
        age: 0,
    };
    // Userのインスタンスではないのでfalse
    console.log(userB instanceof User);
}