import React from 'react'
import styles from './login.module.css'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import FormLogin from '../components/form/form'

const Login = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.form}>
        <div className={styles.bg}>
          <FormLogin></FormLogin>
        </div>
        <FormLogin />
      </div>
      <Footer />
    </div>
  )
}

export default Login