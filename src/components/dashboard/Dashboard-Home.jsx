import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DashBoardHome = () => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        // Obter o Id_Aluno armazenado no localStorage
        const Id_Aluno = localStorage.getItem('Id_Aluno');

        if (Id_Aluno) {
          const response = await fetch(`http://localhost:8080/pagina-usuario/${Id_Aluno}`);
          if (response.ok) {
            const data = await response.json();
            setUsuario(data.usuario);
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

  if (!usuario) {
    return <div>Loading...</div>;
  }

  let Faixa;

    if (usuario.Id_Faixa === 0) {
    Faixa = "Branca";
    } else if (usuario.Id_Faixa === 1) {
    Faixa = "Amarela";
    } else if(usuario.Id_Faixa === 2){
      Faixa = "Laranja";
    } else if(usuario.Id_Faixa === 3){
      Faixa = "Verde";
    } else if(usuario.Id_Faixa === 4){
      Faixa = "Azul";
    } else if(usuario.Id_Faixa === 5){
      Faixa = "Roxa";
    } else if(usuario.Id_Faixa === 6){
      Faixa = "Marrom";
    } else if(usuario.Id_Faixa === 7){
      Faixa = "Preto";
    }

    if(usuario.Matriculado === "Não"){
      return(
        <div>
        <h1>Perfil do Usuário</h1>
        <h2>Nome Completo: {usuario.nomeCompleto}</h2>
        <h2>Faixa: {Faixa}</h2>
        <h2>Matricula: {usuario.Matriculado}</h2>
        <Link to={"/dashboard-matricula"}>Matricular</Link>
        </div>

        
      );

    }


  return (
    <div>
      <h1>Perfil do Usuário</h1>
      <h2>Nome Completo: {usuario.nomeCompleto}</h2>
      <h2>Faixa: {Faixa}</h2>
      <h2>Matricula: {usuario.Matriculado}</h2>
    </div>
  );
};

export default DashBoardHome;
