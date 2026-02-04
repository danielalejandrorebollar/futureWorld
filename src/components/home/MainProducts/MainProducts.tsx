
import Image from "next/image";
import styles from './MainProducts.module.sass'
import {  getCollectionProducts } from "app/services/shopify/collections";
// console.log("SHOPIFY_HOSTNAME:", process.env.SHOPIFY_HOSTNAME); 



export const MainProducts = async () => {

  
 
  const products =  await getCollectionProducts('gid://shopify/Collection/504500814143')
  // const response = await fetch('http://localhost:3000/api')
  // const productos = await response.json()
  // console.log(productos)
  // const productss = await products.json()
  // console.log(products)

  // console.log(process.env.NEXT_PUBLLIC_SHOPIFY_HOSTNAME,"asdasd")


  if (!products.ok ) {
  console.error(products.error);
  return null;
}
  return ( 
    
    <section>
      <h3 className={styles.titulo}>Nuevos Video Games</h3>
      <div className={styles.MainProducts}>

          {  !!products && products.data.map( product =>{ 
            // console.log(product)
            const imageSrc = product.images.edges[0].node.originalSrc;
            // console.log(imageSrc)
            
            
            return (
              <article className={styles.MainProducts__imageContainer} key={product.id}>
                <p>{product.title}</p>
                
                <Image   
                   
                    fill
                    priority={true}
                    quality={30} 
                    src={imageSrc}
                    alt={product.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    >
                    
                </Image>
              </article>
            )
          })} 
      </div>
    </section>

  )
}
  