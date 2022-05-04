export type User = {
    name: string,
    age: number,
};

export const user: User = {name:"test", age:33};

export function GetUserNames(users: User[]): string[]{
    let names: string[] = [];
    for(const user of users){
        names.push(user.name);
    };
    return names;
}