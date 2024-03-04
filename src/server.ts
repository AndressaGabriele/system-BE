import fastify from "fastify";
import { routes } from "./routes";
import cors from "@fastify/cors";
import { error } from "console";
import { request } from "http";

const app = fastify({ logger: true })

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message })
})


// const start = async () => {

//     await app.register(cors)
//     await app.register(routes)

//     try{
//         const PORT = Number(process.env.PORT)
//         app.listen({
//             port: PORT 
//         })
//     }catch(err){
//         process.exit(1) 
//     }
// }

// start();
app.register(cors)
app.register(routes)

try {
    const PORT = Number(process.env.PORT)
    app.listen({
        port: PORT
    })
} catch (err) {
    process.exit(1)
}