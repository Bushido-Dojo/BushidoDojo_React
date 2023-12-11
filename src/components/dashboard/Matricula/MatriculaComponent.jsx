import { Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export const MatriculaComponent = () => {
    const token = localStorage.getItem("token");
    const [data, setData] = useState({});

    const fetchToken = async () => {
        if (token) {
            const response = await fetch(`http://localhost:8080/api/aluno/dashboard/matricula/${token}`);
            if (response.status === 200) {
                const fetchedData = await response.json();
                setData(fetchedData);
            } else if (response.status === 400) {
                const fetchedData = await response.json();
                setData(fetchedData);
            }
        } else {
            return <Navigate to={'/'} />; // Redirecionamento caso o token esteja ausente
        }
    }

    useEffect(() => {
        fetchToken();
    }, []);

    const nomeCompleto = data.nomeCompleto;
    const dataMatricula = data.dataMatricula;
    let matriculaAtrasada = data.matriculaAtrasada;
    const vencimentoParcela = data.vencimentoParcela;
    const ultimoPgto = data.ultimoPgto;

    if (matriculaAtrasada === "Não") {
        matriculaAtrasada = "Matrícula em dia.";
    } else {
        matriculaAtrasada = "Matriculado(a) Atrasado(a).";
    }

    const handleMatricula = async () => {
        const token = localStorage.getItem('token');

        if (!token) {
            console.error('Erro: Token não encontrado.');
            return;
        }

        try {
            const response = await fetch(`http://localhost:8080/api/aluno/dashboard/matricular/${token}`)
            if (response.ok) {
                const data = await response.json();
                console.log(data.message);
                window.location.reload();
            } else {
                const data = await response.json();
                console.error(data);
            }
        } catch (error) {
            console.error('Erro ao processar a solicitação:', error);
        }
    };

    if (typeof nomeCompleto === 'undefined') {
        const matriculado = data.matriculado;
        if (matriculado === "Não") {
            return (
                <div>
                    <h1>Faça já sua Matrícula</h1>
                    <h1>APENAS R$59,99 POR MÊS!!</h1>
                    <button onClick={handleMatricula}>Matricule-Se</button>
                </div>
            )
        }
    }

    return (
        <div>
            <h1>Sua Matrícula {nomeCompleto}</h1>
            <h2>Situação: {matriculaAtrasada}</h2>
            <h3>Vencimento Parcela: {vencimentoParcela}</h3>
            <h3>Data de Matrícula: {dataMatricula}</h3>
            <h3>Data Último Pagamento: {ultimoPgto}</h3>
        </div>
    );
}
