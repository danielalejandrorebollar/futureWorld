import ProductCard from "../ProductCard/ProductCard"
import styles from './ProductWrapper.module.sass'

interface ProductsWrapperProps {
    products: ProductType[] | null
}

const ProductsWrapper = ({products}: ProductsWrapperProps) => {
  return (
    
    <div className={styles.ProdcutsWrapper}>
        {products?.map((product)=>(
            <ProductCard key={product.id} product={product}/>
        ))}
    </div>
  )
}


export { ProductsWrapper}