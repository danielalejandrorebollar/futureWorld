"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import styles from './Header.module.sass'
import { handleLogout } from 'app/actions'
import { usePathname, useRouter } from 'next/navigation'
// import { Head } from 'next/document'

const NoSSRShoppingCart = dynamic(()=>import('../ShoppingCart'),{ssr:false})

interface HeaderClientProps {
  customer: CustomerResponse
}

const HeaderClient = ({customer}:HeaderClientProps) => {

  const [isOpenUser,setIsOpenUser] = useState<boolean>(false)
  const [isOpenShoppingCart,setIsOpenShoppingCart] = useState<boolean>(false)

  const pathname = usePathname()
  const router = useRouter()

  const handleOpen = ()=>{
      setIsOpenUser(!isOpenUser)
      setIsOpenShoppingCart(false)
  }

  const handleButtonLogout = () =>{
    handleLogout()
    setIsOpenUser(!isOpenUser)
  }

  const handleButtonMyAccount = () =>{
    router.push('/my-account')
     setIsOpenUser(!isOpenUser)
  }

  useEffect(()=>{
    setIsOpenUser(false)
  },[pathname])
  
  return (
    <header className={styles.Header}>
          <nav>
            <ul>
              <Link href="/">
               <li>Inicio</li>

              </Link>
              <Link href="/store">
                <li>Tienda</li>
              
              </Link>
              <Link href="/test">
                <li>Test</li>
              
              </Link>
            </ul>
          </nav>

          <div className={styles.Header__user}>

            {customer?.ok ? 
            
              <div>
                <button className={styles.Header__user__buttonLogin} onClick={handleOpen}>
                  <li>hola {customer?.customer?.firstName}</li> 
                </button>
                { isOpenUser && 
                  <div className={styles.Header__user__myAccount}>
                    <button onClick={handleButtonMyAccount} className={styles.Header__user__buttonLogout}>
                       My Account
                    </button>
                    <button onClick={handleButtonLogout} className={styles.Header__user__buttonLogout}>
                       Log Out
                    </button>
                  </div>
                    
                }

              </div>
              
                    
          
             : <Link href="/login"> Login</Link>}
          
          {/* {isOpen && hastItems && (
          <div className={styles.ShoppingCart__items}>
            {cart.map(item=>(
              
              <ShoppingCartItem key={item.id} cartItem={item}/>
              
              
              
            ))}
            <button onClick={handleBuy} className={styles.ShoppingCart__buyButton}>Buy</button>
          </div>
        )} */}
            <NoSSRShoppingCart 
              setIsOpenUser={setIsOpenUser} 
              setIsOpenShoppingCart={setIsOpenShoppingCart}
              isOpenShoppingCart={isOpenShoppingCart}  />
              
          </div>
        </header>
  )
}

export { HeaderClient}