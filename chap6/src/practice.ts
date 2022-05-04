{
    type Option<T> = {
        tag: "optional",
        prop: T,
    } | {
        tag: "none"
    }

    const none: Option<number> = {
        tag:"none",
        //prop: 1,
    };

    const numop: Option<number> = {
        tag:"optional",
        prop: 123,
    };

    const showNumberIfExists = (obj: Option<number>) => {
        if(obj.tag === "optional"){
            console.log(obj.prop);
        }
    }
    showNumberIfExists(numop);
    showNumberIfExists(none);
}


// 6.8.4
// {
//     type A<T> = {
//         tag: "optional",
//         prop: T,
//     }
    
//     type B = {
//         tag: "none",
//     };

//     type Option<T> = A<T> | B;
//     // type Option<T> = {
//     //     tag: "optional",
//     //     prop: T,
//     // } | {
//     //     tag: "none"
//     // }

//     const none: Option<number> = {
//         tag:"none",
//         //prop: 1,
//     };

//     const numop: Option<number> = {
//         tag:"optional",
//         prop: 123,
//     };

//     // 通常パターン
//     // function isOptional<T>(obj: Option<T>): obj is A<T>{
//     //     return obj.tag === "optional";
//     // }
//     function isOptional<T>(obj: Option<T>): asserts obj is A<T>{
//         if(obj == null){
//             throw new Error();
//         }

//         if(obj.tag !== "optional"){
//             throw new Error();
//         }
//     }

//     const showNumberIfExists = (obj: Option<number>) => {
//         // if(obj.tag === "optional"){
//         //     console.log(obj.prop);
//         // }

//         isOptional(obj);
//         console.log(obj.prop);
//         // 通常パターン の回答
//         // if(isOptional(obj)){
//         //     console.log(obj.prop);
//         // }
//     }
//     showNumberIfExists(numop);
//     showNumberIfExists(none);
// }

// 6.8.5
{
    type A<T> = {
        tag: "optional",
        prop: T,
    }
    
    type B = {
        tag: "none",
    };

    type Option<T> = A<T> | B;
    
    const none: Option<number> = {
        tag:"none",
    };

    const four: Option<number> = {
        tag:"optional",
        prop: 4,
    };
    
    function doubleOption(obj: Option<number>){
        return mapOption(obj, x => x * 2);
    }

    function mapOption<T>(obj: Option<T>, func:(obj: T) => T){
        if(obj.tag === "none"){
            return obj;
        }
        
        const props = func(obj.prop);
        return {tag: obj.tag, props: props };
    }
    console.log("---6.8.5---");

    console.log(doubleOption(four)); // {tag: "number". value:8}
    console.log(doubleOption(none)); // {tag: "number"}
}