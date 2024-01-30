import { FastifyReply, FastifyRequest } from 'fastify'
import { ListCostumerService } from '../services/ListCostumerService'

class ListCostumerController{
async handle(request: FastifyRequest, reply: FastifyReply){
    const listCustomerService = new ListCostumerService()
    const customers = await listCustomerService.execute()

    reply.send(customers)

}
}

export {ListCostumerController}