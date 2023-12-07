import axios from "axios";

export class axiosBase {
  constructor() {
    this.Api = axios.create({
      baseURL: process.env.REACT_API_URL ?? "http://localhost:8080",
    });
  }

  async login(email, senha) {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, senha }),
    };
    try {
      const logado = await this.Api.post("/login/login", options).then(() => {
        if (logado) {
          localStorage.setItem("id", logado.data.Id_Aluno);
          return (window.location.href = "/bushido-dashboard");
        } else {
          console.error(
            "Erro ao fazer login:",
            logado.data.message ?? "Erro desconhecido ao fazer login"
          );
          return logado.data.message;
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  async register(nome, sobrenome, cpf, email, celular, dataNascimento, senha) {
    const data = {
      nome,
      sobrenome,
      cpf,
      email,
      celular,
      dataNascimento,
      senha,
    };
    const registrado = await this.Api.post(
      "/cadastro",
      JSON.stringify({ ...data })
    );
    if (!!registrado.status(200)) {
      console.error("Erro ao enviar dados!");
      return "Erro ao enviar dados!";
    } else {
      localStorage.setItem("id", registrado.data.Id_Aluno);
      return (window.location.href = "/bushido-dashboard");
    }
  }
}
