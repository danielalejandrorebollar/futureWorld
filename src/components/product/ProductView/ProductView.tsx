// "use client"
import Image from "next/image"
import styles from './ProductView.module.sass'
import { ProductViewItemsOrder } from "./ProductViewItemsOrder"
// import { useRouter } from "next/navigation"
import { SanitizeHTML } from "app/components/shared/SanitizeHTML"


interface ProductViewProps {
    product: ProductType
}


const ProductView = ({product}: ProductViewProps) => {
console.log(product)
  // const route = useRouter()
  // if(!product){
  //   route.push('/')

  // }


  return (
    <>
        <main className={styles.ProductView}>
            <section className={styles.ProductView__images}>
                <Image
                    loading="eager"
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={400}
                    quality={75}

                    />
            </section>
            <section className={styles.ProductView__info}>
              <h1 className={styles.ProductView__info__title}>{product.title}</h1>
              {/* <p className={styles.ProductView__info__category}>{product.tags}</p> */}
              <SanitizeHTML tag='p'>{product.description+'<p><p/>'}</SanitizeHTML>
              <p className={styles.ProductView__info__desscription}>{product.description}</p>
              <span className={styles.ProductView__info__price}> ${product.price}</span>
              <ProductViewItemsOrder maxQuantity={product.quantity} product={product}/>
            </section>
        </main>
    </>
  )
}

export  {ProductView}