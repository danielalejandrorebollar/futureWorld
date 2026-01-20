import { ProductsWrapper } from "app/components/Store/ProductsWrapper";
import { getCollectionByIdentifier, getCollectionProducts } from "app/services/shopify/collections";

import { getProducts } from "app/services/shopify/products";
import styles from './page.module.sass'
// import { text } from "stream/consumers";

interface CateogoryProps{
    params:{
        categories:string[]
    },
     searchParams?: {
        [key: string]: string | string[] | undefined;
    }
}

 const Category = async ({params}:CateogoryProps) =>{
    const categories =  await params.categories 
    // const search =  await searchParams?.categories 
    // console.log( search)
    let products  = []
    let productsByCollection = []

    if(categories){
         console.log("categorias...",categories)
         productsByCollection = await getCollectionByIdentifier(categories[0])
        console.log(productsByCollection) 
        // if(productsByCollection)
        products = (await getCollectionProducts(productsByCollection.id)) 
        //  products = await getProducts()
        console.log("productos resultado de la busqueda por coleccion",products)
        
    }else{
          products = await getProducts()
    }
    // console.log(searchParams.asdasd )
    // console.log( JSON.stringify(params))    
    // console.log( "searchPArams",JSON.stringify(searchParams))
    // console.log("productos finales",products)
//    throw new Error('Error: Boom');
    return(
        <>
        <h1 className={styles.titulo}>{productsByCollection?.title || 'Tienda'}</h1>
            <div className={styles.Contenedor}>
                {/*<div>{categories}</div>*/}
                <ProductsWrapper products={products}/>
            </div>
            
        </>
    )
}

export default Category