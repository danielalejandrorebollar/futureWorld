"use client"
import styles from './Description.module.sass'
import classNames from 'classnames/bind'
import { useState } from 'react'

export const Description = () => {
  const [hasBorder, setHasBorder] = useState(false)

  const handleClick = () =>{
    setHasBorder(!hasBorder)
  }

  const cx = classNames.bind(styles);

  const buttonStyles =  cx('Description__button',{
    'Description__button--border':hasBorder,
  })

  // console.log(typeof buttonStyles )

  // console.log(hasBorder)
  return (

    
    <section className={styles.Description}>
      {hasBorder&&<button style={{ border: '2px solid red' }}>Con borde</button>}
      <button className={buttonStyles} onClick={()=> handleClick()}>
        <div className={styles.Description__imageContainer}>
          
          {/* <Image 
            src="/images/maestro.jpg"
            alt="products" 
            // width={500} 
            // height={300} 
            priority={true} 
            // blurDataURL={PATH_blur}
            quality={30}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          /> */}

        </div>
      </button>
      <div className={styles.Description__text}>
        <div>
          <h2>Bring the future Video Games</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquam molestiae vero facilis! Possimus quidem ipsum sapiente obcaecati.</p>

        </div>

      </div>
    </section>
  )
}
