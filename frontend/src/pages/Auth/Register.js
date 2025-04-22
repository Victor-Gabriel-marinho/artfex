// import styles from "../Auth/Auth.module.css";
import styles from "../tailwind/output.css"
import axios from "axios"

//Components
import { Link } from "react-router-dom";

//Hooks
import { useState, useEffect } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      cidade,
      estado,
      confirmPassword,
    };

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais");
      return;
    }
    // envia os dados do front pro backend 
    try {
      const response = axios.post("http://127.0.0.1:5000/user/criar", user);
      console.log("Usuário cadastrado com sucesso:", response.data);
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error.response?.data || error.message);
      setError("Erro ao cadastrar. Verifique os dados.");
    }

    
    console.log(user);
  };

  return (
    <div className="font-[MuseoModerno]">
      <div className="">

        <section className="">
          <h1><span className="text-9xl text-[#f2994b] font-[MuseoModerno]">Art<span>fex</span></span> <br />
          o melhor para sua arte</h1>
        </section>

        <section className="">
          <div className="">
            <div className="">
              <h2 className="bg-blue-500">Artfex</h2>
              <p className="">Cadastre-se</p>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Nome"
                  onChange={(e) => setName(e.target.value)}
                  value={name || ""}
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email || ""}
                />
                <input
                  type="cidade"
                  placeholder="Cidade"
                  onChange={(e) => setCidade(e.target.value)}
                  value={cidade || ""}
                />
                <input
                  type="estado"
                  placeholder="estado"
                  onChange={(e) => setEstado(e.target.value)}
                  value={estado || ""}
                />
                <input
                  type="password"
                  placeholder="Senha"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password || ""}
                />
                <input
                  type="password"
                  placeholder="Confirme sua senha"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword || ""}
                />
                <input type="submit" value="Cadastrar" />
                {error && <p className="error">{error}</p>}
              </form>
              <p>
                Já tem uma conta? <Link to="/login">Clique aqui</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;
