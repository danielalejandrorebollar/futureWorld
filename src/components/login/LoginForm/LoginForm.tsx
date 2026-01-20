"use client"
import React, { FormHTMLAttributes, useEffect, useState } from 'react'
import styles from './LoginForm.module.sass'
import { handleLogin } from 'app/actions'
import ErrorUser from './ErrorUser'

const LoginForm = () => {

  const [error,setError] = useState(false)
  const [mensaje,setMensaje] = useState<string>('')
  const [showError, setShowError] = useState(false)

  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const response = await handleLogin(formData)
    console.log(response?.error[0].message)
    console.log(response?.error[0])
    if(!response?.ok){
      setError(true)
      setMensaje(response?.error[0].message  ?? 'Error desconocido')
    }else {
      setError(false)
      setMensaje('')
    }

  }
  console.log(mensaje)
 // ⏱️ TEMPORIZADOR
  useEffect(() => {
    
    if (!error) return

    setShowError(true)

    const timer = setTimeout(() => {
      setShowError(false) // dispara fadeOut
    }, 3000) // 3 segundos

    return () => clearTimeout(timer)
  }, [error])

  useEffect(() => {
    
     if (showError) return

    const timer = setTimeout(() => {
      
      setError(false)
      setMensaje("")
    }, 3000) // 3 segundos

    return () => clearTimeout(timer)
  }, [showError])


  const loading= false

  return (
     <div className={styles.LoginForm}>
      <h1 className={styles.LoginForm__title}>Login</h1>
      <ErrorUser message={mensaje} showError={showError}/>
      <form className={styles.LoginForm__form} onSubmit={handleSubmit} >

        <input type="email" name="email" placeholder="Email"  disabled={loading} />
        <input type="password" name="password" placeholder='password' disabled={loading} />
        <input type="submit" name="submit" value='Iniciar Sesión'  disabled={loading} />
      </form>
    </div>
  )
  
}

export { LoginForm}