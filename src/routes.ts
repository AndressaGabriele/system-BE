import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import { request } from "http";
import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { ListCostumerController } from "./controllers/ListCostumerController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }
    })
    // tipagem é legal para o type entender

    fastify.post("/customer", async(request: FastifyRequest, reply: FastifyReply) => {
       return new CreateCustomerController().handle(request, reply)
    })

    //list info
    fastify.get("/customers", async(request: FastifyRequest, reply: FastifyReply) => {
        return new ListCostumerController().handle(request, reply)
     })

     fastify.delete("/customer", async(request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerController().handle(request, reply)
     })
}