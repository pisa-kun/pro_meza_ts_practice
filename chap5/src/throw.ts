{
    try{
        console.log("errorを発生させるよ");
        throwError();
        //console.log("errorを発生したよ");
    }catch(err){
        console.log(err);
        console.log("errorを発生したよ");
    }finally{
        console.log("例外が起きても起きなくても通るよ！");
    }

    function throwError(){
        const rand = Math.random();
        console.log(rand);
        if(rand > 0.5){
            const error = new Error("エラーが発生しました!!!");
            throw(error);
        }
    }
}