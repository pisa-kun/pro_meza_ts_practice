// 3.5
const arg1 = [4,5,6];
const arg2 = [1,2,"3", ...arg1];
console.log(arg2, typeof(arg2));

console.log(arg2[0]);

//3.5.3
const arr3: boolean[] = [false, true];
console.log(arr3);

const arr4: Array<{name: string}> = [
    {name: "a"},
    {name: "b"},
    {name: "c"},
];
console.log(arr4);

//3.5.5
const arr5 = [1,10,100];
// #array.push method returns the new array length.
const r = arr5.push(1000); // return 4
const _ = arr5.push(10000); // brank case
console.log(r, arr5);
console.log(arr5.includes(1),arr5.includes(11));

// 3.5.6
for(const element of arr5){
    console.log(element);
}

// last index access
console.log(arr5[arr5.length -1]);