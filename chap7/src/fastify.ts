// npm install --save-dev fastify
import fastify from "fastify";
{
    const app = fastify();


    app.get("/", (_, reply) => {
        reply.send("Hello, World");
        // 呼ばれない
        //reply.send("I am hoge");
    });

    app.listen(8888);
}