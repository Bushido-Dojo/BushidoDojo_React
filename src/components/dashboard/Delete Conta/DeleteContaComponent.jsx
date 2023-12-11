import React from 'react';

export const DeleteConta = async () => {
  const token = localStorage.getItem('token');

  if (!token) {
    console.error('Erro: Token não encontrado.');
    window.location.href = '/';
    return;
  }

  try {
    const response = await fetch(`http://localhost:8080/api/aluno/dashboard/delete-conta/${token}`);
    if (response.ok) {
      const data = await response.json();
      alert('Conta Apagada');
      window.location.href = '/';
    } else {
      const data = await response.json();
      console.error(data);
    }
  } catch (error) {
    alert(error.message);
  }
};

export const DeleteContaComponent = () => {
  return (
    <div>
      <header>
        <h1>Deseja mesmo deletar sua conta?</h1>
      </header>
      <main>
        <button onClick={DeleteConta}>Confirmar</button>
      </main>
    </div>
  );
};

