// export type Animal = {
//     species: string;
//     age: number;
// };

// export type Cat = Animal & {target: string};

type Animal = {
    species: string;
    age: number;
};

type Cat = Animal & {target: string};

export type{Animal, Cat};

const nekochan: Cat = {
    species: "cat",
    age: 1,
    target: "sakana",
};
export {nekochan};