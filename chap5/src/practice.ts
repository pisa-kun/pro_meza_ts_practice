{
    type User = {
        name: string,
        age: number,
    };

    function createUser(name: string, age: number): User{
        if(name === ""){
            throw new Error("名前は空にできないよ");
        }
        return {name, age};
    }

    function getMessage(user: User, message: string): string{
        return `${user.name} (${user.age}) 「${message}」`;
    }

    const honoke = createUser("kuroki hono", 27);
    console.log(honoke);
    console.log(getMessage(honoke, "private talk"));
}

{
    class User{
        constructor(public name: string, public age: number){
            this.name = name;
            this.age = age;
        }
        
        public getMessage(message: string): string{
            return `${this.name} (${this.age}) 「${message}」`;
        }
    }

    const honoke = new User("kuroki hono", 27);
    console.log(honoke);
    console.log(honoke.getMessage("private talk"));
}

{
    // createUserは 2つの引数を受け取って
    // 文字列型を受け取って文字列を返す 関数 を返す
    const createUser = (name: string, age: number) => 
    (message: string) => `${name} (${age}) 「${message}」`;
    // const createUser = (name: string, age: number) => {
    //     return function(message: string){
    //         `${name} (${age}) 「${message}」`;
    //     };
    // };
    const getMessage = createUser("honoke", 27);
    
    // kuroki hono (27) 「private talk」
    console.log(getMessage("private talk"));
}