import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./FormLogin.module.css";

const FormLogin = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    senha: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
    // Clear related error when typing
    setErrors({
      ...errors,
      [name]: '' // Clear the related error when typing
    });
  };

  const findAccount = async (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (loginData.email.trim() === '') {
      validationErrors.email = 'O email é obrigatório';
    } else if (/\s/.test(loginData.email)) {
      validationErrors.email = 'O email não pode conter espaços em branco';
    }

    if (loginData.senha.trim().length < 4) {
      validationErrors.senha = 'A senha deve ter pelo menos 4 caracteres';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await fetch('http://localhost:8080/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginData)
        });

        if (response.ok) {
          const data = await response.json();
          if (data.Id_Aluno) {
            localStorage.setItem('Id_Aluno', data.Id_Aluno);
            window.location.href = '/bushido-dashboard';
          } else {
            setErrors({ backendError:data.message });
            console.error('Erro ao fazer login:', data.message || 'Erro desconhecido ao fazer login');
          }
        } else {
          const data = await response.json();
          if (data.message) {
            setErrors({ backendError: data.message });
          } else {
            setErrors({ backendError: data.message });
          }
          console.error('Erro ao fazer login:', data.message || 'Erro desconhecido ao fazer login');
        }
      } catch (error) {
        setErrors({ backendError: 'Erro ao tentar fazer login' });
        console.error('Erro ao tentar fazer login:', error);
      }
    }
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
      {errors.backendError && <p className={styles.error}>{errors.backendError}</p>}
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
