import React from 'react'
import styles from './ShoppingCart.module.sass'
import {FaTrashAlt} from 'react-icons/fa'
import Image from "next/image"
import { useShoppingCart } from 'app/hooks/useShoppingCart'

const ShoppingCartItem = ({item}) => {
  console.log(item)
  const partes = item.title.split(' ');
  const resultado = partes.slice(0, 2).join(' '); 
  const {removeCartItem} = useShoppingCart()

  const handleErase = () =>{
    removeCartItem(item.id)
  }
  return (
    <div className={styles.ShoppingCartItem}>
      
      <Image 
                          loading="eager"
                          src={item.image}
                          alt={item.title}
                          width={25}
                          height={25}
                          quality={75}
      
                          />
      <div>{resultado}</div>
      <div> x{item.quantity}</div>
      <button onClick={handleErase} className={styles.ShoppingCartItem__button}><FaTrashAlt/></button>
    </div>
  )
}

export { ShoppingCartItem}