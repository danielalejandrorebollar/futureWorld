import React from 'react'
import styles from './ShoppingCart.module.sass'
import {FaTrashAlt} from 'react-icons/fa'
import Image from "next/image"
import { useShoppingCart } from 'app/hooks/useShoppingCart'

interface ShoppingCartItemProps {
  cartItem:CartItem
}
const ShoppingCartItem = ({cartItem}:ShoppingCartItemProps) => {
  // console.log(item)
  const partes = cartItem.title.split(' ');
  const resultado = partes.slice(0, 2).join(' '); 
  const {removeCartItem} = useShoppingCart()

  const handleErase = () =>{
    removeCartItem(cartItem.id)
  }
  return (
    <div className={styles.ShoppingCartItem}>
      
      <Image 
                          loading="eager"
                          src={cartItem.image}
                          alt={cartItem.title}
                          width={25}
                          height={25}
                          quality={75}
      
                          />
      <div>{resultado}</div>
      <div> x{cartItem.quantity}</div>
      <button onClick={handleErase} className={styles.ShoppingCartItem__button}><FaTrashAlt/></button>
    </div>
  )
}

export { ShoppingCartItem}