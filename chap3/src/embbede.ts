const d = new Date();
console.log(d);
console.log(Date.now());

// regular expression
const re = /ab+c/;
console.log(re.test("abbbbbbc"));
console.log(re.test("Hello, abc world!"));
console.log(re.test("ABC"));