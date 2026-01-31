"use client"
import {FaShoppingCart} from 'react-icons/fa'
import styles from './ShoppingCart.module.sass'
import { useShoppingCart } from 'app/hooks/useShoppingCart'
import { useState, useEffect } from 'react'
import { ShoppingCartItem } from './ShoppingCartItem'
import {  usePathname } from 'next/navigation'
import { handleCreateCart } from 'app/actions'
import {  useRouter } from 'next/navigation'

const ShoppingCart = ({setIsOpenUser,setIsOpenShoppingCart,isOpenShoppingCart}) => {

  
  const [isBuying,setIsBuying] = useState<boolean>(false)
  const { cart } = useShoppingCart()
  const hastItems = cart.length > 0
  const pathname = usePathname()
  
  const route = useRouter()
  const handleOpen = ()=>{
    if(hastItems)
    setIsOpenShoppingCart(!isOpenShoppingCart)
    setIsOpenUser(false)
  }

  useEffect(() => {
    // cada vez que cambia la ruta, se cierra el carrito
    setIsOpenShoppingCart(false)
  }, [pathname])
  // console.log(cart)

  const handleBuy = async()=>{
    try {
      setIsBuying(true);
      const checkoutUrl =  await handleCreateCart(cart);
      if(!checkoutUrl.ok) {
        console.log(checkoutUrl.error)
        console.log(checkoutUrl.noToken)
        console.log(checkoutUrl.variables)

        // window.location.href = '/test'
        setIsOpenShoppingCart(false)
        if(checkoutUrl.noToken)
          route.push('/login')
        return
      }
      window.localStorage.removeItem('cart')
      window.location.href = checkoutUrl?.checkoutUrl as string;
    } catch (error) {
      console.log(error)
      window.location.href = '/store'
      setIsOpenShoppingCart(false)
    } finally{
      setIsBuying(false)
    }
  } 

  return (


    <div className={styles.ShoppingCart}>
      { hastItems && 
        <span className={styles.ShoppingCart__counter}>
          {cart.length}
        </span>
      
      }
      
      <button className={styles.ShoppingCart__cart} onClick={handleOpen}>
        <FaShoppingCart/>
      </button>
      
        {isOpenShoppingCart && hastItems && (
          <div className={styles.ShoppingCart__items}>
            {cart.map(item=>(
              
              <ShoppingCartItem key={item.id} cartItem={item}/>
              
              
              
            ))}
            <button onClick={handleBuy} className={styles.ShoppingCart__buyButton}>Buy</button>
          </div>
        )}
        
      

    </div>
 ) 
}

export default ShoppingCart