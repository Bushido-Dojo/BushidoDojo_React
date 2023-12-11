import styles from './login.module.css'
import img from '../../components/images/slogan.png'
import NewHeader from '../../components/header/header'
import FormLogin from '../../components/formLogin/FormLogin'
import Footer from '../../components/footer/footer'
import Visual from '../../components/visual/visual'

const login = () => {
  return (
    <div className={styles.main}>
      <NewHeader />
      <div className={styles.form}>
        <div className={styles.bg}>
        </div>
        <div>
          <Visual/>
        </div>
        <div className={styles.slogan}>
          <img src={img} alt="slogan bushido" />
          <FormLogin />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default login