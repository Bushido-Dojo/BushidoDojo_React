import React from 'react'
import styles from './login.module.css'
// import Visual from '../components/visual/visual'
import img from '../../components/images/slogan.png'
import NewHeader from '../../components/header/header'
import FormLogin from '../../components/formLogin/FormLogin'
import Footer from '../../components/footer/Footer'
import Visual from '../../components/visual/visual'

const Login = () => {
  return (
    <div className={styles.main}>
      <NewHeader />
      <div className={styles.form}>
        <div className={styles.bg}>
        </div>
        <div className={styles.slogan}>
          <img src={img} alt="slogan bushido" />
          <Visual />
          <FormLogin />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login