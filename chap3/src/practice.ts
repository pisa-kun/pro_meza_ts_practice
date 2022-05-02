type User = {
    name: string,
    age: number,
    premiumUser: boolean,
};

const data: string = `
uhyo,26,1
John Smith,17,0
Mar Sue,14,1
`;

// add
const regex = /\n|,/;
const str = data.split(regex);
// 空白削除
const str2 = str.filter(n => n !== "");
console.log(str2, str2.length);

let users: User[] = [];
const SPLITNUMBER = 3;
for(let i = 0; i < str2.length/SPLITNUMBER; i++){
    const user = str2.slice(i*SPLITNUMBER, (i+1)*SPLITNUMBER);
    // ※ string の"0"は文字列として長さが1以上なのでtrue
    // そのため、numberの0に変換してBooleanチェックする
    const u: User = {name:user[0], age:Number(user[1]), premiumUser:(user[2] === "1")};
    users.push(u);
}
for(const user of users){
    if(user.premiumUser){
        console.log(`${user.name}(${user.age})はプレミアムユーザーです。`);
    }else{
        console.log(`${user.name}(${user.age})はプレミアムユーザーはありません。`);
    }
}