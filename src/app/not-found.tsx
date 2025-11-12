import React from 'react'
import styles from 'app/sass/NotFound.module.sass'
import Image from 'next/image'
import Link from 'next/link'

const NotFound = () => {
  return (
    <>
    <main className={styles.NotFound}>
        <h1 className={styles.NotFound__title}>404</h1>
        <Image
            src='/images/404.jpg'
            alt='404'
            width={300}
            height={300}
        />
        <h2 className={styles.NotFound__subtitle}>Uy parace que el enlace se escondió</h2>
        <p>Pero nuestra tienda está abierta las 24/7</p>
        <Link className={styles.NotFound__button} href='/store'>!VAMOS DE COMPRAS¡</Link>
    </main>
    </>
  )
}

export default NotFound