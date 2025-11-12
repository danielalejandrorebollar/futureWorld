import styles from './Hero.module.sass'

export const Hero = () => {
  console.log(styles)
  return (
    <section className={styles.Hero}>

      <h1>Video Games the present is today</h1>
      <h2>Empowering your tomorrow</h2>
    </section>
  )
}
