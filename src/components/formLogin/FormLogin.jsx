import React from 'react'
import styles from './FormLogin.module.css'
//
const FormLogin = () => {
    return (
        <form action="" method="" className={styles.form}>
            <div className={styles.input}>
                <label>Usuario:</label>
                <input type="text" />
            </div>
            <div className={styles.input}>
                <label>Senha:</label>
                <input type="password" />
            </div>
            <button type="submit">Login</button>
            <div className="cadastro">
                <p>Não possui cadastro?</p>
            </div>
            <div className='cadastro_link'>
                Cadastre-se <a href="#"></a>
            </div>
        </form>
    )
}

export default FormLogin