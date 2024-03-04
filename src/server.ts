import fastify from "fastify";
import { routes } from "./routes";
import cors from "@fastify/cors";
import { error } from "console";
import { request } from "http";

const app = fastify()

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message })
})

app.register(cors)
app.register(routes)

try {
    const PORT = Number(process.env.PORT)
    app.listen({
        port: PORT, host: '0.0.0.0'
    })
} catch (err) {
    process.exit(1)
}