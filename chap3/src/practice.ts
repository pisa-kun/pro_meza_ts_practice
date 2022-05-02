type User = {
    name: string,
    age: number,
    premiumUser: boolean,
};

const data: string = `
uhyo,26,1
John Smith, 17,0
Mar Sue,14,1
`;

// add
const users: User[] = [{name:"test", age:22, premiumUser:true}];
//
for(const user of users){
    if(user.premiumUser){
        console.log(`${user.name}(${user.age})はプレミアムユーザーです。`);
    }else{
        console.log(`${user.name}(${user.age})はプレミアムユーザーはありません。`);
    }
}