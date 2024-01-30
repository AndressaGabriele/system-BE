import prismaClient from "../prisma"

interface DeleteCustomerProps{
    id: string,
}
class DeleteCustomerService{
    async execute({ id }: DeleteCustomerProps){

        if(!id){
            throw new Error("Invalid request")
        }

        const findCostumer = await prismaClient.customer.findFirst({
            where:{
                id: id
            }
        })

        if(!findCostumer){
            throw new Error("Customer not found")
        }

        await prismaClient.customer.delete({
            where:{
                id: findCostumer.id
            }
        })

        return {message: "sucess"}

    }
}

export { DeleteCustomerService }