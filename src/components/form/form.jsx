import React from 'react'
import styles from './form.module.css'

const FormLogin = () => {
    return (
        <form action="" method="" className={styles.form}>
            <div className={styles.input}>
                <label>Usuario</label>
                <input type="text" />
            </div>
            <div className={styles.input}>
                <label>Senha</label>
                <input type="password" />
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default FormLogin