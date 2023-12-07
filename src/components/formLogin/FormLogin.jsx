import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosBase } from "../../api/apiUse";
import { validateEmail, validatePassword } from "../../validation";
import styles from "./FormLogin.module.css";

const FormLogin = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    senha: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const findAccount = async (e) => {
    e.preventDefault();

    const valid =
      validateEmail(loginData.email) & validatePassword(loginData.senha);

    if (valid) {
      console.log(validateEmail(), validatePassword());
      return alert("Erro no email ou senha!");
    }

    const api = new axiosBase();
    await api.login(loginData.email, loginData.senha);
  };

  return (
    <form className={styles.form} onSubmit={findAccount}>
      <div className={styles.input}>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={loginData.email}
          onChange={handleInputChange}
          placeholder="bushidodojo@gmail.com"
        />
      </div>
      <div className={styles.input}>
        <label>Senha:</label>
        <input
          type="password"
          name="senha"
          value={loginData.senha}
          onChange={handleInputChange}
          placeholder="Digite sua Senha"
        />
      </div>
      {errors.email && <p className={styles.error}>{errors.email}</p>}
      {errors.senha && <p className={styles.error}>{errors.senha}</p>}
      {errors.backendError && (
        <p className={styles.error}>{errors.backendError}</p>
      )}
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
