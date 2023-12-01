import React, { useState } from "react";
import styles from "./FormRegister.module.css";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";
const axios = require('axios');


const FormRegister = () => {
  const [data, setData] = useState({
    nome:'',
    sobrenome:'',
    cpf:'',
    email:'',
    celular:'',
    dataNascimento:'',
    senha:''
  });

  const valorInput = e => setData({...data, [e.target.name]: e.target.value});


  const sendAccount = (e) =>{

    e.preventDefault();

    console.log(`Nome ${data.nome}`)
    console.log(`Sobrenome ${data.sobrenome}`)
    console.log(`CPF ${data.cpf}`)
    console.log(`Email ${data.email}`)
    console.log(`Celular ${data.celular}`)
    console.log(`Data de Nascimento ${data.dataNascimento}`)
    console.log(`Senha ${data.senha}`)
    const dataForm = {
      nome: data.nome,
      sobrenome: data.sobrenome,
      cpf: data.cpf,
      email: data.email,
      celular: data.celular,
      dataNascimento: data.dataNascimento,
      senha: data.senha,
    }
    fetch("http://localhost:8080/cadastro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataForm)
    })
    .then((response) => {
      if (response.status === 200) {
        console.log("Dados enviados com sucesso!");
      } else {
        console.log("Erro ao enviar dados!");
      }
    })
    .catch((error) => {
      console.log(error);
    });
  };


  return (
    <form className={styles.form} onSubmit={sendAccount}>
      <h1 id={styles.h1}>Crie sua <span>conta!</span></h1>

      <div className={styles.submit}>
        <div className={styles.parse}>
          <div className={styles.input}>
            <p>
              <label>Nome:</label>
            </p>
            <input type="text" name="nome" onChange={valorInput}/>
          </div>
          <div className={styles.input}>
            <p>
              <label>Sobrenome:</label>
            </p>
            <input type="text" name="sobrenome" onChange={valorInput} />
          </div>
        </div>
        <div className={styles.input}>
          <label>CPF:</label>
          <InputMask mask="999.999.999-99" type="cpf" name="cpf" placeholder="Digite seu CPF" onChange={valorInput} />
        </div>
        <div className={styles.input}>
          <label>Email:</label>
          <input type="email" name="email" onChange={valorInput}/>
        </div>
        <div className={styles.input}>
          <label>Celular:</label>
          <input type="celular" name="celular" onChange={valorInput}/>
        </div>
        <div className={styles.input}>
          <label>Data nascimento:</label>
          <input type="data" name="dataNascimento" onChange={valorInput} />
        </div>
        <div className={styles.input}>
          <label>Senha:</label>
          <input type="password" name="senha" onChange={valorInput}/>
        </div>
        <button type="submit">Cadastrar</button>
      </div>
      <div className="login">
        <p>Já possui cadastro? <Link to={"/login"}>Login</Link></p>
      </div>
    </form>
  );
};


export default FormRegister;
