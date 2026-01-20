"use client" 
import Image from 'next/image'
import styles from 'app/sass/Error.module.sass'
import { useRouter } from 'next/navigation'



const GlobalError = (Props: ErrorPageProps) => {
  // const id = props.searchParams

  console.log(Props)
  const route = useRouter()

  const redirectAfter = () =>{
    route.push('/store')
  }

  return (
    <main className={styles.Error}>

        <h1>Ha ocurrido un error</h1>
        {/* <p>{id}</p> */}
        <Image
            src='/images/error.jpg'
            width={400}
            height={400}
            alt='Error'
        >
        </Image>
        <p className={styles.Error__message}>Al parecer ha ocurrido un error, pero no te sientas mal</p>
        <button className={styles.Error__button} onClick={redirectAfter}>Volver a intentar</button>
    </main>
  )
}

export default GlobalError