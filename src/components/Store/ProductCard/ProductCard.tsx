import Image from "next/image"
import Link from "next/link"
import styles from './ProductCard.module.sass'

interface ProductCardProps {
    product: ProductType
}

const ProductCard = ({product}: ProductCardProps) => {
    console.log(product)
    const imageSrc = product.images.edges[0].node.originalSrc
  return (

    <Link href={`/articulo/${product.handle}?id={product.id}`} className={styles.ProductCard__link}>
        <article>
            <div className={styles.ProductCard__image}>
                <Image
                    fill
                    priority={true}
                    quality={50} 
                    src={imageSrc}
                    alt={product.title}
                    sizes="(max-width: 3200px) 100vw, (max-width: 320px) 50vw, 33vw"
                    // width={500} 
                    // height={300} 
                    loading="eager"
                />
            <span className={styles.ProductCard__priceTag}>${product.variants.nodes[0].price} MXN</span>
            </div>
            <div className={styles.Product__info}>
                <h3>{product.title}</h3>
            </div>
        </article>
    </Link>

  )
}

export default  ProductCard