{
    // プリミティブ型をユニオン(|)させることができる
    type Week = "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";
    const checkDayOff = (day: Week) => {
        if(day === "Sat" || day === "Sun"){
            console.log(`${day}は休日です`);
        }else{
            console.log(`${day}は平日です`);
        }
    }
    checkDayOff("Sat");
    checkDayOff("Mon");
    // 引数にWeekを要求しているので、通常の文字列は渡せない
    //checkDayOff("test");
}