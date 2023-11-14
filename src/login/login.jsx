import React from 'react'
import styles from './login.module.css'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import FormLogin from '../components/form/form'
import img from '../components/images/slogan.png'

const Login = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.form}>
        <div className={styles.bg}>
        </div>
        <div className={styles.slogan}>
          <img src={img} alt="" />
          <FormLogin />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login