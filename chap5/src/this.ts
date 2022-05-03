{
    class User{
        constructor(public name: string, private age: number){
            this.name = name;
            this.age = age;
        };

        public isAdmin(): boolean {
            return this.age >= 20;
        };

        public filterOlder(users: readonly User[]): User[]{
            return users.filter(u => 
                {
                    console.log(`${u.name} VS ${this.name}`);
                    return u.age > this.age;
                });
        }
    }

    const saya = new User("saya", 25);
    const hono = new User("hono", 15);
    const bob = new User("bob", 40);
    const mi = new User("mi", 26);
    const hitomin = new User("hitomin", 19);

    // thisの対象はsaya
    const older = saya.filterOlder([hono, bob, mi, hitomin]);
    console.log(older);
}