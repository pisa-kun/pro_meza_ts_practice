{
    type Human = {
        name: string,
        age: number,
    };

    const chi: Human = {
        name: "suganuma",
        age: 29,
    };

    function get<T, K extends keyof T>(obj: T, key: K): T[K]{
        return obj[key];
    };
    // const get_allow = <T, K extends keyof T>(obj: T, key: K): T[K] => obj[key];

    // 第二引数は(K extends keyof T)により、obj: Tのプロパティに必ずなる
    console.log(get(chi, "age"));
    console.log(get(chi, "name"));

    type Robot = {
        name: string,
        serial: string,
        series: number,
        created: Date,
    };

    const robot: Robot = {
        name: "pc",
        serial: "cflv",
        series: 12345,
        created: new Date(),
    }

    // get(obj: Robot, key: keyof Robot): string | number | Date
    console.log(get(robot, "created"));
}