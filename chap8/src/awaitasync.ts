{
    async function get3(): Promise<number> {
        console.log("get3が呼び出されたよ");
        return 3;
    }

   const get4 = async () => {
       return 4;
   }

   console.log("get3を呼び出すよ");
   // async メソッドを呼び出したタイミングで関数自体は実行される
   const p = get3();
   // return の値は thenを実行した後に戻ってくる
   p.then((num) => {
       console.log(num);
   });
   console.log("get3を呼び出したよ");

   //get4().then((num) => {console.log(num)});
}

{
    const sleep = (duration: number) => {
        return new Promise<void>((resolve) => {
            setTimeout(resolve, duration);
        });
    };

    async function get3() {
        console.log("get3が呼び出されました");
        await sleep(3000);
        console.log("awaitの次に進め");
        return 3;
    }

    console.log("get3を呼び出します");
    const p = get3();
    p.then((num) => {
        console.log(`num is ${num}`);
    });
    console.log("get3を呼び出しました");
}