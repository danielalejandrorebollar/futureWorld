
import Image from "next/image";
import styles from './MainProducts.module.sass'
import { getProducts } from "app/services/shopify";
// console.log("SHOPIFY_HOSTNAME:", process.env.SHOPIFY_HOSTNAME); 



export const MainProducts = async () => {

  
 
  const products =  await getProducts()
  const response = await fetch('http://localhost:3000/api')
  const productos = await response.json()
  console.log(productos)
  // const productss = await products.json()
  // console.log(products)

  // console.log(process.env.NEXT_PUBLLIC_SHOPIFY_HOSTNAME,"asdasd")
  return ( 
    
    <section>
      <h3 className={styles.titulo}>Nuevos Video Games</h3>
      <div className={styles.MainProducts}>

          {  !!products && products.map( product =>{ 
            // console.log(product)
            const imageSrc = product.images.edges[0].node.originalSrc
            // console.log(imageSrc)
            
            
            return (
              <article className={styles.MainProducts__imageContainer} key={product.id}>
                <p>{product.title}hola</p>
                
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
  