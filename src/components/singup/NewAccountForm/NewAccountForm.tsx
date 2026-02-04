"use server"
// import router from 'next/router'
// import React, { useState } from 'react'
// import { useRouter } from 'react'
import styles from './NewAccountForm.module.sass'
import { handleCreateUser } from 'app/actions'


const NewAccountForm = async () => {
  



const loading = false

// const [errors, setErrors] = useState<string[]>([])
// const [loading, setLoading] = useState<boolean>(false)

  return (
    <div className={styles.NewAccountForm}>
      <h1 className={styles.NewAccountForm__title}>New Account</h1>
      <form className={styles.NewAccountForm__form} action={handleCreateUser}>
        <div className={styles.NewAccountForm__form__rowGroup}>
          <input type="text" name="firstName" placeholder="Name" disabled={loading} />
          <input type="text" name="lastName" placeholder='Last Name' disabled={loading} />

        </div>
        <input type="email" name="email" placeholder="Email"  disabled={loading} />
        <input type="text" name="phone" placeholder='Phone' pattern='^[0-9]+$' disabled={loading} />
        <input type="password" name="password" placeholder='password' disabled={loading} />
        <input type="password" name="passwordConfirmation" placeholder='re-type password' disabled={loading} />
        <div className={styles.NewAccountForm__form__rowGroup}>
          <input type="hidden" name="acceptsMarketing" value="false"  disabled={loading} />
          <label htmlFor="checkboxInput" >Aceptas Marketing</label>
          <input type="checkbox" id="checkboxInput" name="acceptsMarketing" value="true" disabled={loading} />
        </div>
        <input type="submit" name="submit" value='Crear cuenta'  disabled={loading} />
      </form>
    </div>
  )
}

export default NewAccountForm