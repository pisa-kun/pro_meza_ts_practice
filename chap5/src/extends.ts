{
    // 5.3
    class User{
        constructor(public name: string, private age: number){
            this.name = name;
            this.age = age;
        }

        public isAdult(): boolean{
            return this.age > 20;
        }
    }

    class PremiumUser extends User{
        rank: number = 1;

        constructor(name: string, age: number){
            super(`premium ${name}`, age);
            console.log(this.name);
        }

        // override修飾子で明示的にオーバーライド
        public override isAdult(): boolean {
            return true;
        }
    }

    const userA = new PremiumUser("omiho", 19);
    const userB = new User("popo", 15);
    console.log(userA.isAdult(), userB.isAdult());

}

{
    // 5.3.5
    interface HasName {
        name: string,
        GetName: () => string,
    }

    // implementsによってHasNameを必ず満たす(部分型)必要がある
    class User implements HasName{
        constructor(public name: string, public age: number){
            this.name = name;
            this.age = age;
        }

        public GetName(): string{
            return this.name;
        }
    }

    const user = new User("yuky", 23);
    console.log(user.GetName());
}