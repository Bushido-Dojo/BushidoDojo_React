import React from "react";
import styles from "./FormRegister.module.css";
import { Link } from "react-router-dom";
//
const FormRegister = () => {
  return (
    <div className={styles.form}>
      <h1 id={styles.h1}>Crie sua <span>conta!</span></h1>

      <div className={styles.submit}>
        <div className={styles.parse}>
          <div className={styles.input}>
            <p>
              <label>Nome:</label>
            </p>
            <input type="nome" />
          </div>
          <div className={styles.input}>
            <p>
              <label>Sobrenome:</label>
            </p>
            <input type="sobrenome" />
          </div>
        </div>
        <div className={styles.input}>
          <label>CPF:</label>
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
        <button type="submit">Cadastrar</button>
      </div>
      <div className="login">
        <p>Já possui cadastro? <Link to={"/login"}>Login</Link></p>
      </div>
    </div>
  );
};

export default FormRegister;
