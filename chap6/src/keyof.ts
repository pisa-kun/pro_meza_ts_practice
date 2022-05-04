{
    type Human = {
        name: string,
        age: number,
    };

    // Humanのプロパティ名(key)を取得
    // "name" | "age"
    type HumanKeys = keyof Human;
    let key: HumanKeys = "name";
    //key = "hoge";
    const piyo = {name: "kono", age: 24};
    console.log(piyo[key]);
}

{
    const mmConversionTable = {
        mm: 1,
        cm: 10,
        m: 1e3, // 1000
        km: 1e6,
    };

    // (parameter) unit: "mm" | "cm" | "m" | "km"
    const convertUnits = (value: number, unit: keyof typeof mmConversionTable) => {
        const mmvalue = value * mmConversionTable[unit];
        return{
            mm:mmvalue,
            m: mmvalue / 1e3,
            km: mmvalue / 1e6,
        };
    }

    console.log(convertUnits(100, "cm"));
}