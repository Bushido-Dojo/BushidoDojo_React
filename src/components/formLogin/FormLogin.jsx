import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./FormLogin.module.css";

const FormLogin = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    senha: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const findAccount = (e) => {
    e.preventDefault();
  
    console.log("Dados de login:", loginData);
  
    fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
    .then(response => {
      if (response.ok) {
        window.location.href = '/dashboard-home'; // Redirecionamento após o login bem-sucedido
      } else {
        // Lógica de tratamento de erro
      }
    })
    .catch(error => {
      console.error('Erro ao tentar fazer login:', error);
    });
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
