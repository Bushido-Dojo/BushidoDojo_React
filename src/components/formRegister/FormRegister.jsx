import React, { useState } from "react";
import styles from "./FormRegister.module.css";
import InputMask from "react-input-mask";
import { Link } from "react-router-dom";

const FormRegister = () => {
  const [data, setData] = useState({
    nome: '',
    sobrenome: '',
    cpf: '',
    email: '',
    celular: '',
    dataNascimento: '',
    senha: ''
  });
  const [message, setMessage] = useState(null);

  const valorInput = e => setData({ ...data, [e.target.name]: e.target.value });


  const sendAccount = (e) => {
    e.preventDefault();


    const dataForm = {
      nome: data.nome,
      sobrenome: data.sobrenome,
      cpf: data.cpf,
      email: data.email,
      celular: data.celular,
      dataNascimento: data.dataNascimento,
      senha: data.senha
    };


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
            <input type="text" name="nome" onChange={valorInput} placeholder="Digite seu Nome." />
          </div>
          <div className={styles.input}>
            <p>
              <label>Sobrenome:</label>
            </p>
            <input type="text" name="sobrenome" onChange={valorInput} placeholder="Digite seu Sobrenome." />
          </div>
        </div>
        <div className={styles.input}>
          <label>CPF:</label>
          <InputMask mask="999.999.999-99" type="cpf" name="cpf" placeholder="Digite seu CPF" onChange={valorInput} />
        </div>
        <div className={styles.input}>
          <label>Email:</label>
          <input type="email" name="email" placeholder="Digite seu Email." onChange={valorInput} />

        </div>
        <div className={styles.input}>
          <label>Celular:</label>
          <InputMask mask="(99)99999-9999" name="celular" onChange={valorInput} placeholder="Digite Seu Número" />

        </div>
        <div className={styles.input}>
          <label>Data nascimento:</label>
          <InputMask
            mask="99/99/9999"
            maskPlaceholder="__/__/____"
            onChange={valorInput}
            value={data.dataNascimento}
          >
            {(inputProps) => (
              <input
                type="text"
                name="dataNascimento"
                {...inputProps}
                placeholder="Ex.: dd/mm/aaaa"
              />
            )}
          </InputMask>
        </div>
        <div className={styles.input}>
          <label>Senha:</label>
          <input type="password" name="senha" onChange={valorInput} placeholder="Digite sua senha." />
        </div>
        <p></p>
        {message && <p className={styles.error}>{message}</p>}
        <p></p>
        <button type="submit">Cadastrar</button>
      </div>
      <div className="login">
        <p>Já possui cadastro? <Link to={"/login"}>Login</Link></p>
      </div>
    </form>
  );
};


export default FormRegister;