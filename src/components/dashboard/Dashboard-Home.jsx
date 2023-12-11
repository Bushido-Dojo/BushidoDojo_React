import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./DashBoard-Home.css"

const DashBoardHome = () => {
  const [aluno, setAluno] = useState(null);
  const [matriculado,setMatriculado]= useState(null);

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const token = localStorage.getItem('token');

        if (token) {
          const response = await fetch(`http://localhost:8080/api/aluno/dashboard/${token}`);
          if (response.ok) {
            const data = await response.json();
            setAluno(data.aluno);
            setMatriculado(data.matriculado);
            
          }
        } else {
          // Se o Id_Aluno não estiver disponível, você pode redirecionar para a página de login
          window.location.href = '/login'; // Redirecionar para a página de login ou tratar a lógica de autenticação
        }
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    };

    fetchUsuario();
  }, []);

  if (!aluno) {
    return <div>Loading...</div>;
  }

  let Faixa;

    if (aluno.Id_Faixa === 0) {
    Faixa = "Branca";
    } else if (aluno.Id_Faixa === 1) {
    Faixa = "Amarela";
    } else if(aluno.Id_Faixa === 2){
      Faixa = "Laranja";
    } else if(aluno.Id_Faixa === 3){
      Faixa = "Verde";
    } else if(aluno.Id_Faixa === 4){
      Faixa = "Azul";
    } else if(aluno.Id_Faixa === 5){
      Faixa = "Roxa";
    } else if(aluno.Id_Faixa === 6){
      Faixa = "Marrom";
    } else if(aluno.Id_Faixa === 7){
      Faixa = "Preto";
    }

    if(matriculado === "Não"){
      return(
        <div className="dashboard">
        <h2>Bem vindo {aluno.Nome}{" "}{aluno.Sobrenome}!</h2>
        <h2>Faixa: {Faixa}</h2>
        <h2>Matriculado: {matriculado}</h2>
        Matricule-se
        <Link to={"/bushido-dashboard/matricula"}>Matricular</Link>
        </div>

        
      );

    }


  return (
    <div className="dashboard">
      <h1>Perfil do Usuário</h1>
      <h2>Nome Completo: {aluno.Nome}{" "}{aluno.Sobrenome}</h2>
      <h2>Faixa: {Faixa}</h2>
      <h2>Matriculado: {matriculado}</h2>
      
    </div>
  );
};

export default DashBoardHome;
