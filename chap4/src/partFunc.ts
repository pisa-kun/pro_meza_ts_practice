// 4.3
{
    type HasName = {
        name: string,
    };

    type HasNameAndAge = {
        name: string,
        age: number,
    };

    const showName = (obj: HasName) =>{
        console.log(obj.name);
    };

    //const g = (obj: HasNameAndAge) => {};
    //const g: (obj: HasNameAndAge) => void = showName;
    let g = (obj: HasNameAndAge) => {};
    g = showName;
    g({name:"test", age:24});
}

{
    type UnaryFunc = (num: number) => number;
    type BinaryFunc = (left: number, right: number) => number;

    const uf: UnaryFunc = (num: number) => num * num;
    const bf: BinaryFunc = (left, right: number) => left + right;
    console.log(bf(11, 2));
    
    const bf_in_uf: BinaryFunc = uf;
    console.log(bf_in_uf(11, 2));
}

{
    // function fillZero(nums: number[]): void{
    //     for(let i = 0; i < nums.length; i++){
    //         nums[i] = 0;
    //     }
    // }
    const fillZero = (nums: number[]): void => {
        for(let i = 0; i < nums.length; i++){
            nums[i] = 0;
        }
    }
    const nums1 = [1,10,100];
    fillZero(nums1);
    console.log(nums1);

    const sum = (nums: readonly number[]): number => {
        let sum = 0;
        for(let i = 0; i < nums.length; i++){
            sum += nums[i];
        }
        return sum;
    }
    const nums2: readonly number[] = [1,10,100];
    // 型 'readonly number[]' の引数を型 'number[]' のパラメーターに割り当てることはできません。
    //fillZero(nums2);

    console.log(sum(nums1), sum(nums2));
}