type Animal = {
    name: string;
}
type Family<Parent = Animal, Child = Animal> = {
    mother:Parent,
    father:Parent,
    child:Child,
};

type S = Family<string, number>
const s: S = {
    mother: "a",
    father: "b",
    child: 2,
};

const family: Family = {
    mother: {name:"a"},
    father: {name:"b"},
    child: {name:"c"},
}
console.log(family);