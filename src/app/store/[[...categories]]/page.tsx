import { ProductsWrapper } from "app/components/Store/ProductsWrapper";
import { getProducts } from "app/services/shopify";


interface CateogoryProps{
    params:{
        categories:string[]
    },
     searchParams: {
        [key: string]: string | string[] | undefined;
    }
}
 const Category = async ({params,searchParams}:CateogoryProps) =>{
    const categories = params.categories 
    const products = await getProducts()
    // console.log(categories)
    // console.log(searchParams.asdasd )
    // console.log( JSON.stringify(params))    
    // console.log( "searchPArams",JSON.stringify(searchParams))

//    throw new Error('Error: Boom');
    return(
        <>
            <h1>Categoría dinámica</h1>
            <div>{categories}</div>
            <ProductsWrapper products={products}/>
        </>
    )
}

export default Category