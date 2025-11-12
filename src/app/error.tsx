"use client" 
import Image from 'next/image'
import styles from 'app/sass/Error.module.sass'

const GlobalError = ({reset}: ErrorPageProps) => {
  return (
    <main className={styles.Error}>

        <h1>Ha ocurrido un error</h1>
        <Image
            src='/images/error.jpg'
            width={400}
            height={400}
            alt='Error'
        >
        </Image>
        <p className={styles.Error__message}>Al parecer ha ocurrido un error, pero no te sientas mal</p>
        <button className={styles.Error__button} onClick={reset}>Volver a intentar</button>
    </main>
  )
}

export default GlobalError