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