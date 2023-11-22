import React from "react";
import styles from "./FormRegister.module.css";
//
const FormRegister = () => {
  return (
    <form action="" method="" className={styles.form}>
      <div className={styles.input}>
        <label className={styles.nome}>Nome:</label>
        <input type="nome" />
      </div>

      <div className={styles.input}>
        <label>Sobrenome:</label>
        <input type="sobrenome" />
      </div>

      <div className={styles.input}>
        <label>Cpf:</label>
        <input type="cpf" />
      </div>

      <div className={styles.input}>
        <label>Email:</label>
        <input type="email" />
      </div>

      <div className={styles.input}>
        <label>Celular:</label>
        <input type="celular" />
      </div>

      <div className={styles.input}>
        <label>Data nascimento:</label>
        <input type="data" />
      </div>

      <div className={styles.input}>
        <label>Senha:</label>
        <input type="password" />
      </div>

      <button type="submit">Login</button>
      <div className="login">
        <p>Já possui Login?</p>
      </div>
      
      <div className="login_link">
        Fazer Login <a href="#"></a>
      </div>
    </form>
  );
};

export default FormRegister;
