"use server"

import { GraphQLClientSingleton } from 'app/graphql'
import { createUserMutation } from 'app/graphql/mutations/createUserMutation'
import { createCartMutation } from 'app/graphql/mutations/createCartMutation'
import {GraphQLClient} from 'graphql-request'
import { createAccesToken } from 'app/util/auth/createAccesToken'
import { redirect } from 'next/navigation'
import { cookies } from "next/headers"
import { validateAccessToken } from 'app/util/auth/validateAccessToken'


const handleCreateUser = async (formData:FormData) => {

  const cookieStore = await cookies()
  console.log(formData)
  const raw = Object.fromEntries(formData)
  const formDataObject = Object.fromEntries(
      Object.entries(raw).filter(([key]) => !key.startsWith("$ACTION_ID_")));

  delete formDataObject["passwordConfirmation"]
  delete formDataObject["submit"]
  console.log(formDataObject)
  // let acceptMarketing: boolean;
  // if(formDataObject["acceptMarketing"]==="false")
  //   acceptMarketing = false 
  // else
  //   acceptMarketing = true
  const graphClient:GraphQLClient = GraphQLClientSingleton.getInstance().getClient()
  const variables = {
    input: {
      ...formDataObject,
      acceptsMarketing:formDataObject["acceptMarketing"]==="true",
      phone: "+52" + formDataObject["phone"]
      
    }

  };
  // console.log(formDataObject)
  console.log("Antes del Try ...................................................................... \n           ",variables)
  // console.log(variables.input.phone)
  
  try{
    
    const data = await graphClient.request(createUserMutation,variables)
    
    if (!data?.customerCreate.customer) {
      console.log("Errores:................", data.customerCreate?.customerUserErrors);
      return { ok: false };
    }
    // console.log("Errores.....................................................\n",data.customerCreate.customerUserErrors)
    console.log("datos del cliente dentro de data............................. "+`/n`,data.customerCreate.customer)
    
    const {customerCreate:{customer}} = data
    
    if(customer?.firstName){
      console.log("si existe customer......................................./n",customer)
      const userToken =  await createAccesToken({email:formDataObject.email as string,password:formDataObject.password as string})
      if(!userToken?.ok){
      const {accessToken, expiresAt} = userToken?.customerAccessToken
        
            cookieStore.set("accesToken",accessToken,{
                path:'/',
                expires: new Date(expiresAt),
                httpOnly: true,
                sameSite: "strict"
            })
            
            console.log("despues del accestoken..................................................\n ")
            console.log(cookieStore.get("accesToken"))
        }
      }else
        return
     
    
    

    //  return {
    //   mensaje:"exito",
    //   ok:customer!=null?"exito":"falló al crear cliente",
    //   data,
    // }
    
  }catch(error){
    console.log({mensaje:error,ok:"falló"})
  } 

   redirect('/store')
 
  
}



 const handleLogin =  async (formData:FormData) => {

  const cookieStore = await cookies()
  const formDataObject = Object.fromEntries(formData)
  try {
    const userToken =  await createAccesToken({email:formDataObject.email as string, password:formDataObject.password as string})
    console.log(userToken)
    if(userToken?.ok){
      // console.log('linea 99 ',userToken)
      const {accessToken, expiresAt} = userToken.customerAccessToken
        cookieStore.set("accesToken",accessToken,{
            path:'/',
            expires: new Date(expiresAt),
            httpOnly: true,
            sameSite: "strict"
        })
        
        console.log("despues del accestoken..................................................\n ")
        console.log(cookieStore.get("accesToken"))
    }else {
      console.log("Error usuario no existe ...................\n",userToken?.customerUserErrors)
      return {ok:false,error:userToken?.customerUserErrors}
    }

  } catch (error) {
    console.log({mensaje:error,ok:"falló"})
    return {ok:false,error}
  }
  
  redirect('/store')
  



}

const handleCreateCart = async(items: CartItem[]) =>{

  const cookieStore = await cookies()
  const accessToken = cookieStore.get('accesToken')?.value as string
  // console.log(items[0])
  if(!accessToken) 
    return {ok:false,noToken:true}
  
  const graphClient: GraphQLClient = GraphQLClientSingleton.getInstance().getClient();
  const result: CustomerResponse = await validateAccessToken();
  const {customer} = result 
  const variables = {
    input:{
      buyerIdentity:{
        customerAccessToken: accessToken,
        email: customer?.email
      },
      lines: items.map(item=>({
        merchandiseId: item.gql_id,
        quantity: item.quantity
      }))
      
    }
  }
  console.log(variables.input.lines)
  
  try {
      const { cartCreate}: {
      cartCreate?:{
        cart?:{
          checkoutUrl:string
        }
      }
    } = await graphClient.request(createCartMutation,variables)
  return {ok:true, checkoutUrl:cartCreate?.cart?.checkoutUrl}
  
  } catch (error) {
    console.log("error al hacer graphql de crear Cart",error)
    return {ok:false, error,variables}
  }
  
}

const handleLogout = async () =>{
  const cookieStore = await cookies()
  cookieStore.delete('accesToken')
  // redirect('/store')
}

export { handleCreateUser, handleLogin, handleCreateCart, handleLogout }