import prismaClient from "../prisma";

class ListCostumerService{
    async execute(){
        const costumers = await prismaClient.customer.findMany()

        return costumers
    }
}

export { ListCostumerService }