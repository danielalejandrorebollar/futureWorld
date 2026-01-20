import { getCollections } from "app/services/shopify/collections";
import Link from "next/link";
import styles from './Categories.module.sass'



async function Layout({children}:{children:React.ReactNode}){

    const collections = await getCollections()
    //console.log(collecitons)
    console.log(typeof(collections),collections,'colecciones')
    return (
        <main>
            <nav className={styles.Categories}>
                {
                    collections.map((collection) => (
                        <Link className={styles.Categories__link} href={'/store/'+collection.node.handle} key={collection.node.id}>{collection.node.title}
                        </Link>
                    ))
                }
            </nav>
            {children}
        </main>
    )
}

export default Layout;