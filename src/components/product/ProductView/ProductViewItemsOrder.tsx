"use client"

import React, { SyntheticEvent } from 'react'
import styles from './ProductViewItemsOrder.module.sass'
import { useShoppingCart } from 'app/hooks/useShoppingCart'

interface ProductViewIntemsOrderProps {
  maxQuantity: number,
  product:ProductType
}

const ProductViewItemsOrder = ({maxQuantity, product}:ProductViewIntemsOrderProps) => {

  const [cantidad, setCantidad ]  = React.useState(1);
  const { addToCart } = useShoppingCart()

  const handleAddToCart = (event:SyntheticEvent)=>{
    event.preventDefault()
    console.log("ProductViewtemsORder este es el gql_id.../n",product.gql_id)
    
    addToCart({
      title: product.title,
      price:product.price,
      quantity: cantidad,
      id: product.id,
      image: product.image,
      gql_id: product.gql_id
    })

  }


  const addAmount = () =>{
    setCantidad(cantidad => cantidad+1)
  }
  const restAmount = () =>{
    setCantidad(cantidad => {
      if(cantidad==1) 
        cantidad = 1;
      else 
        cantidad = cantidad -1;
      return cantidad
    })
  }

  
 

  // console.log(product)
  return (
    <>
    
    <form className={styles.ProductViewItemsOrder} >
      
        <div className={styles.ProductViewItemsOrder__contenedor}>
          
          
          <span onClick={restAmount} className={styles.ProductViewItemsOrder__contenedor__span}>-</span>
          <span className={styles.ProductViewItemsOrder__contenedor__item}>{cantidad}</span>
          <span onClick={addAmount}className={styles.ProductViewItemsOrder__contenedor__span}>+</span>
          

        </div>
        <button onClick={handleAddToCart} className={styles.ProductViewItemsOrder__addToCart} type="submit">Add to cart</button>
        
      
    </form>
    </>

  )
}

export  {ProductViewItemsOrder}