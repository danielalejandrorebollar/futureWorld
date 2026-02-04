import { ProductsWrapper } from "app/components/Store/ProductsWrapper";
import { getCollectionByIdentifier, getCollectionProducts } from "app/services/shopify/collections";

import { getProducts } from "app/services/shopify/products";
import styles from './page.module.sass'
// import { text } from "stream/consumers";

// export const runtime = "edge"

interface CateogoryProps{
    params:Promise<{
        categories?:string[] 
    }>,
     searchParams?: Promise <{
        [key: string]: string | string[] | undefined;
    }>
}

 const Category = async ({params}:CateogoryProps) =>{
    const {categories} =   await params
    
    // const {search} =   searchParams 
    let products
    let productsByCollection
    console.log("categorias...",categories)
    if(categories){
        //  console.log("categorias...",categories)
         productsByCollection = await getCollectionByIdentifier(categories?.[0])
        // console.log(productsByCollection, "Productos por coleccion", typeof productsByCollection) 
         if(!productsByCollection.ok){
            products = {ok:false,data:undefined}
         }else
            products = await getCollectionProducts(productsByCollection.data.id)
        //  products = wait getProducts()
        // console.log("productos resultado de la busqueda por coleccion",products)
        
    }else{
          products = await getProducts()
        //   console.log(products)
    }
    if(!products.ok || !products.data){
        return null
    }
    // console.log(searchParams.asdasd )
    // console.log( JSON.stringify(params))    
    // console.log( "searchPArams",JSON.stringify(searchParams))
    // console.log("productos finales",products)
//    throw new Error('Error: Boom');
    return(
        <>
        <h1 className={styles.titulo}>{productsByCollection?.data?.title ?? 'Tienda'}</h1>
            <div className={styles.Contenedor}>
                {/*<div>{categories}</div>*/}
                { products.ok && <ProductsWrapper products={products.data}/>}
                
            </div>
            
        </>
    )
}

export default Category