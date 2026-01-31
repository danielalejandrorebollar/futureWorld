import { GraphQLClientSingleton } from 'app/graphql'
import { getOrdersQuery } from 'app/graphql/queries/getOrders'
import { cookies } from 'next/headers'

const getCustomerOrders = async ():Promise<OrdersResponse> => {

    const cookieStorage = cookies()
    const accesToken = (await cookieStorage).get("accesToken")?.value || ""
    if(!accesToken)
        return {
            ok:false,
            error:"Usuario no Logueado"
        }  
    const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
    const variables = {
        customerAccessToken: accesToken

    }


    try {
        const { customer } = await graphqlClient.request(getOrdersQuery, variables)
        // console.log(customer)
        const orders:Order[] = customer?.orders?.edges.map((edge:{node:string}) => edge.node)
        console.log(orders)
        return {
            ok:true,
            totalOrders: customer?.orders.totalCount,
            orders

        }
    } catch (error) {
        console.log(error)  
        return {
            ok:false,
            error
        }  
    }


    
  
}

export default getCustomerOrders