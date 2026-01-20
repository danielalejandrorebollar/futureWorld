import React from 'react'
import styles from './LoginForm.module.sass'

const ErrorUser = ({message,showError}:{message:string,showError:boolean}) => {
  return (
    <span className={`${styles.LoginForm__error} ${
        showError ? styles.LoginForm__error__enter : styles.LoginForm__error__exit
      }`}>{message}</span>
  )
}

export default ErrorUser