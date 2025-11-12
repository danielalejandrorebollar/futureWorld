import styles from './Header.module.sass'
import Link from "next/link"

 function Header(){
    return(
         <header className={styles.Header}>
          <nav>
            <ul>
              <Link href="/">
               <li>Inicio</li>

              </Link>
              <Link href="store">
                <li>Tienda</li>
              
              </Link>
              <Link href="test">
                <li>Test</li>
              
              </Link>
            </ul>
          </nav>
        </header>
    )
}

export {Header} ;