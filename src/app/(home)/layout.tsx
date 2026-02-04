import { Description } from "app/components/home/Description";
import { Hero } from "app/components/home/Hero";
import styles from 'app/sass/Contenedor.module.sass'
import Image from "next/image";

export default function HomeLayout( {children}: {children:React.ReactNode}){

    return(
        <>
            <div className={styles.ContenedorHero}>
                <Image 
                    className={styles.ContenedorHero__img}
                    src="/images/games.jpg"
                    alt="products" 
                    fill
                    quality={100}
                    priority={true} 
                    /* blurDataURL={PATH_blur} */
                    
                    
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                <Hero/>
                <Description/>
                  
            </div>
          {children}
        </>
    )
}