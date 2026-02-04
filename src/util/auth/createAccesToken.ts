import { GraphQLClientSingleton } from "app/graphql"
import { GraphQLClient } from "graphql-request"


import { createUserToken } from "app/graphql/mutations/createUserToken"



interface createAccesTokenProps {
    email: string,
    password: string
}

export const createAccesToken = async ({email,password}:createAccesTokenProps) =>{
    

    const graphClient: GraphQLClient = GraphQLClientSingleton.getInstance().getClient();
    console.log("Antes del try de cookies y de la consulta del cliente para crear el token de shopify...........................\n",email,password)
    try {

        
        const {customerAccessTokenCreate}  = await graphClient.request(createUserToken,{
        email:email,
        password:password
        })
        console.log("customerAcces Token...................................\n",customerAccessTokenCreate)

        const {customerAccessToken} = customerAccessTokenCreate
        console.log('aqui el customerAccees Token',customerAccessToken)
        if(!customerAccessToken){
            
            const {customerUserErrors} = customerAccessTokenCreate
            console.log("Customer User Errors...................................\n",customerUserErrors)
            return {ok:false,customerUserErrors,customerAccessToken:null,customerAccessTokenCreate}
            
        }
        return {ok:true,customerAccessToken};
        
        // return {customerAccessToken,ok:"todo bien",cookie:coo}
    } catch (error) {
        console.log("falló.............................\n",error);
        return {ok:false,error}
    }
    

}