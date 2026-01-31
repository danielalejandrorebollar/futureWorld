
import { GraphQLClientSingleton } from 'app/graphql';
import { customerName } from 'app/graphql/queries/customerName';
import { GraphQLClient } from 'graphql-request';
import { cookies } from 'next/headers';


const validateAccessToken = async ():Promise<CustomerResponse> => {
    

     const cookieStore = await cookies();
     const token = cookieStore.get("accesToken")?.value
     if(!token){
        console.log("No esta logueado")
        return {ok:false,error:'No token'};
     }
    const graphClient: GraphQLClient = GraphQLClientSingleton.getInstance().getClient();

    try {
 
         
         const {customer}  = await graphClient.request(customerName,{
         getCustomerAccesToken:token
         })

         return  { ok:true, customer };

    }catch(error){
        console.log("falló",error)
        return { ok:false, error };
    }
 
}

export { validateAccessToken }