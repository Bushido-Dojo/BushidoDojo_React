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

  const validateDateOfBirth = (date) => {
    const [day, month, year] = date.split('/').map(Number); // Convertendo a string para números
    const birthDate = new Date(year, month - 1, day); // Mês é base 0 (janeiro é 0)

    const minAge = 12;
    const currentDate = new Date();

    // Definindo a data mínima permitida com a idade mínima requerida
    const minDate = new Date(currentDate.getFullYear() - minAge, currentDate.getMonth(), currentDate.getDate());

    // Calculando a diferença de anos
    const ageDifference = currentDate.getFullYear() - birthDate.getFullYear();

    // Verificando se a data de nascimento já atingiu a idade mínima
    if (birthDate > minDate || (birthDate.getTime() === minDate.getTime() && ageDifference < minAge)) {
        return false; // Se for menor que a idade mínima
    }

    return true; // Se tiver pelo menos a idade mínima
};
const validateEmail = (email) => {
  console.log(email);
  // Implemente a lógica de validação de e-mail conforme desejado
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
};

  const sendAccount = (e) => {
    e.preventDefault();


    if (!validateEmail(data.email)) {
      setMessage("O email informado não é válido.");
      return;
    }

    if (/\d/.test(data.nome)) {
      setMessage("O nome não deve conter números.");
      return;
    }
    if (/\d/.test(data.sobrenome)) {
      setMessage("O sobrenome não deve conter números.");
      return;
    }

    if (!validateDateOfBirth(data.dataNascimento)) {
      setMessage("A data de nascimento deve representar uma idade maior que 12 anos.");
      return;
    }


    // Se todas as validações passarem, continua com o envio para a API
    const dataForm = {
      nome: data.nome,
      sobrenome: data.sobrenome,
      cpf: data.cpf,
      email: data.email,
      celular: data.celular,
      dataNascimento: data.dataNascimento,
      senha: data.senha
    };

    
    fetch("http://localhost:8080/api/aluno/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(dataForm)
})
    .then((response) => {
      if (response.status === 200) {
        setMessage("Cadastro realizado com sucesso!");
        console.log("Dados enviados com sucesso!");
        
      } else if (response.status === 500) {
        response.json().then((data) => {
          setMessage(data.message.message)
        });
      }
    })
    .catch((error) => {
      setMessage(error);
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