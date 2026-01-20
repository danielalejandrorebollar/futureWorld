"use client"
import {FaShoppingCart} from 'react-icons/fa'
import styles from './ShoppingCart.module.sass'
import { useShoppingCart } from 'app/hooks/useShoppingCart'
import { useState } from 'react'
import { ShoppingCartItem } from './ShoppingCartItem'

const ShoppingCart = () => {
  const [isOpen,setIsOpen] = useState<boolean>(false)
  const { cart } = useShoppingCart()


  const handleOpen = ()=>{
    setIsOpen(!isOpen)
  }
  console.log(cart)
  return (
    <div className={styles.ShoppingCart}>
      
      <span className={styles.ShoppingCart__counter}>{cart.length}</span>
      
      <button className={styles.ShoppingCart__cart} onClick={handleOpen}>
        <FaShoppingCart/>
      </button>
      
        {isOpen && (cart.length!=0) && (
          <div className={styles.ShoppingCart__items}>
            {cart.map(item=>(
              
              <ShoppingCartItem key={item.id} item={item}/>
              
              
              
            ))}
            <button className={styles.ShoppingCart__buyButton}>Buy</button>
          </div>
        )}
        
      

    </div>
 ) 
}

export { ShoppingCart }