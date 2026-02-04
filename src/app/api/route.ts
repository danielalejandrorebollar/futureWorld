// import { getProducts } from "app/services/shopify/products"
import {  getCollectionProducts } from "app/services/shopify/collections";

export const  GET = async () => {
    const message = "prueba de api como endpoint"

    // const products = await getProducts()
    const collections = await getCollectionProducts('gid://shopify/Collection/504500814143')
    return Response.json({collections})
    
}

// export  { GET }



