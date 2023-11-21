import React from 'react'
import styles from './login.module.css'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
// import Visual from '../components/visual/visual'
import FormLogin from '../components/form/form'
import img from '../components/images/slogan.png'
import Visual from '../components/visual/visual'

const Login = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.form}>
        <div className={styles.bg}>
        </div>
        <div className={styles.slogan}>
          <img src={img} alt="slogan bushido" />
          <Visual/>
          <FormLogin/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login