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
    }

  return (
    <div>
      <h1>Perfil do Usuário</h1>
      <h2>Nome Completo: {usuario.nomeCompleto}</h2>
      <h2>Faixa: {Faixa}</h2>
      <p>
        <Link to="/">Voltar</Link>
      </p>
    </div>
  );
};

export default DashBoardHome;
