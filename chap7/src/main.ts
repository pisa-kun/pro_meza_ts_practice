import {user, User, GetUserNames} from "./sample.js";

console.log(`${user.name}, ${user.age}`);

{
    const userA: User = {name:"A", age:24};
    const userB: User = {name:"B", age:24};
    const userC: User = {name:"C", age:24};
    const userD: User = {name:"D", age:24};

    console.log(GetUserNames([userA, userB, userC, userD]));
}