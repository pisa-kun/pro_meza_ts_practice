
{
    const sleep = (duration: number): Promise<void> => {
        return new Promise<void>((resolve) => {
            setTimeout(resolve, duration);
        });
    };

    console.log("call");
    sleep(1000).then(() => {
        console.log("呼ばれたよ");
    });
    console.log("called");
}