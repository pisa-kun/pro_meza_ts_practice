type dobj = {
    d_foo: string,
    d_bar: string,
    d_foobar: number,
};
const d_obj: dobj = {d_foo:"a", d_bar:"b", d_foobar:1};

const {d_foo, d_bar, d_foobar} = d_obj;
console.log(d_obj, d_foo, d_bar, d_foobar);
// propartyname:variable name
const{
    d_foo: d_foo2,
    d_bar: d_bar2,
    d_foobar: d_foobarfoobar2,
} = d_obj

// 3.6.3
// 配列の分割代入は 左辺が[]
const num_arr = [1,2,3,4,5,6,7];
// const first = num_arr[0];
const[first, second, third] = num_arr;
console.log(first, second, third);
const[,,,four,fifth] = num_arr;
console.log(four,fifth);

const tuple: [string, number] = ["takayama", 29];
const[my_name, my_age] = tuple;
console.log(my_name, my_age);

//3.6.5
const[first_num, ...nest] = num_arr;
console.log(nest);