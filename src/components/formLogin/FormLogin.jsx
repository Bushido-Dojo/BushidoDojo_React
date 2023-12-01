import React from "react";
import { Link } from "react-router-dom";
import styles from "./FormLogin.module.css";

const FormLogin = () => {
  return (
    <form action="" method="" className={styles.form}>
      <div className={styles.input}>
        <label>Email:</label>
        <input type="text" placeholder="bushidodojo@gmail.com"/>
      </div>
      <div className={styles.input}>
        <label>Senha:</label>
        <input type="password" placeholder="digite sua senha"/>
      </div>
      <button type="submit">Login</button>
      <div className="cadastro">
        <p>Não possui cadastro?</p>
      </div>
      <div className="cadastro_link">
        <Link to={"/register"}>Cadastre-se</Link>
      </div>
    </form>
  );
};

export default FormLogin;