import React from "react";
import { Link } from "react-router-dom";
import styles from "./FormLogin.module.css";

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
      <div className="cadastro_link">
        <Link to={"#"}>Cadastre-se</Link>
      </div>
    </form>
  );
};

export default FormLogin;