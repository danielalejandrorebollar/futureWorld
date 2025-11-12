import { getProducts } from "app/services/shopify"

export const  GET = async () => {
    const message = "prueba de api como endpoint"

    const products = await getProducts()

    return Response.json({products})
    
}

// export  { GET }



