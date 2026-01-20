import { validateAccessToken } from 'app/util/auth/validateAccessToken'
import styles from './Header.module.sass'
import Link from "next/link"
import { ShoppingCart } from '../ShoppingCart'

 async function Header(){


  // const cookieStore = await cookies();
  // const token = cookieStore.get("accesToken")
  const customer = await validateAccessToken()
  console.log(customer,"toke")
    return(
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

            {customer?.ok ? <li>{customer.customer.firstName}</li> : <Link href="/login"> Login</Link>}
            <ShoppingCart/>
              
          </div>
        </header>
    )
}

export {Header} ;