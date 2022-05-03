{
    class User {
        private static adminUser: string = "god";
        static GetAdmin(){
            return this.adminUser;
        };

        // コンストラクタ引数にすることができる
        // name: string = "";
        // age: number;

        // optional parameter
        power?: number;
        // readonly property
        // privateなので関数経由でしか取得できない
        //private readonly truthage: number;
        
        constructor(
            public name: string, 
            public age: number, 
            private readonly truthage: number)
            {
            this.name = name;
            this.age = age;
            this.truthage = truthage;
        };

        public hukyo(kotoba: string): void{
            console.log(`${kotoba} が大事よ～ん`);
        }

        public SetAge(age: number): void{
            this.age = age;
        }

        public GetTruthAge(): number{
            return this.truthage;
        }

        // readonlyなのでメソッド経由の代入はダメ
        // public SetTruthage(age: number){
        //     this.truthage = age;
        // }
    }
    

    const noriko = new User("shib noriko", 21, 30);
    console.log(noriko.name, noriko.age);
    noriko.hukyo("banana");
    noriko.SetAge(22);
    noriko.power = 100;
    console.log(noriko);
    
    // staticなのでインスタンスから呼べない
    //console.log(noriko.GetAdmin());
    console.log(User.GetAdmin());

    // privateなので呼べない
    //console.log(noriko.truthage);
    console.log(noriko.GetTruthAge(), noriko.GetTruthAge);
}

{
    // 5.1.8
    // クラス宣言同様、クラス式でインスタンスを生成できる
    const User = class{
        constructor(public name: string, public age: number){
            this.name = name;
            this.age = age;
        }
    }
    const usera = new User("aaa", 22);
    const userb = new User("bbb", 33);
    console.log(usera, userb);

    // クラス式を返す関数
    const retClass = <T>() => class{
        constructor(public prop: T){
            this.prop = prop;
        }
        public GetProp():T{
            return this.prop;
        }
    };

    const p1 = retClass<string>();
    console.log(p1);
    const p = new p1("hoge");
    console.log(p.GetProp());

    const p2 = retClass<boolean>();
    console.log(p1);
    const pp = new p2(true);
    console.log(pp.GetProp());
}