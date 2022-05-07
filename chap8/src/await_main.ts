{
    async function main(){
        const {readFile, writeFile} = await import("fs/promises");
        
        try{
        const fooContent = await readFile("a.txt", "utf8");
        await writeFile("result.txt", fooContent + fooContent);
        console.log("書き込み完了した");
        }catch(err){
            console.log("失敗したよ");
        }
    }

    main().then(() => console.log("main()が完了した"));
}