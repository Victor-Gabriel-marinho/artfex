// import styles from "../Auth/Auth.module.css";
import axios from "axios";
import styles from "../tailwind/output.css";

//Components
import { Link } from "react-router-dom";


//Hooks
import { useState } from "react";

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
      alert("Usuário cadastrado com sucesso:", response.data);
    } catch (error) {
      console.error(
        "Erro ao cadastrar usuário:",
        error.response?.data || error.message
      );
      setError("Erro ao cadastrar. Verifique os dados.");
    }

    console.log(user);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex justify-center items-center w-full">
        {/* REGISTER LEFT */}
        <section className="flex-1 bg-[url('./images/tela_registro.png')] bg-cover bg-center h-screen flex flex-col items-center justify-center">
          <h1 className="text-white mb-[6em] mr-[8em]">
            <span className="text-8xl font-bold font-[MuseoModerno] text-[#f2994b]">
              Art<span>fex</span>
            </span>
            <br />
            <span className="text-2xl">o melhor para sua arte</span>
          </h1>
        </section>

        {/* REGISTER RIGHT */}
        <section className="flex-1">
          <div className="">
            <div className="flex justify-center items-center flex-col">
              <h2 className="font-bold text-[#0b3c34] text-4xl mb-[1.5em]">Cadastre-se</h2>
              <form
                className="flex flex-col justify-center mb-[1.5em] pb-[1.5em] border-b border-[#363636] w-[80%]"
                onSubmit={handleSubmit}
              >
                <input
                  className="mb-[1.5em] border-b border-[#363636] pt-[0em] pr-[1em] pb-[1em] pl-[0em] outline-none"
                  type="text"
                  placeholder="Nome"
                  onChange={(e) => setName(e.target.value)}
                  value={name || ""}
                />
                <input
                  className="mb-[1.5em] border-b border-[#363636] pt-[0em] pr-[1em] pb-[1em] pl-[0em] outline-none"
                  type="email"
                  placeholder="E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email || ""}
                />
                <input
                  className="mb-[1.5em] border-b border-[#363636] pt-[0em] pr-[1em] pb-[1em] pl-[0em] outline-none"
                  type="cidade"
                  placeholder="Cidade"
                  onChange={(e) => setCidade(e.target.value)}
                  value={cidade || ""}
                />
                <input
                  className="mb-[1.5em] border-b border-[#363636] pt-[0em] pr-[1em] pb-[1em] pl-[0em] outline-none"
                  type="estado"
                  placeholder="Estado"
                  onChange={(e) => setEstado(e.target.value)}
                  value={estado || ""}
                />
                <input
                  className="mb-[1.5em] border-b border-[#363636] pt-[0em] pr-[1em] pb-[1em] pl-[0em] outline-none"
                  type="password"
                  placeholder="Senha"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password || ""}
                />
                <input
                  className="mb-[1.5em] border-b border-[#363636] pt-[0em] pr-[1em] pb-[1em] pl-[0em] outline-none"
                  type="password"
                  placeholder="Confirme sua senha"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword || ""}
                />
                <input
                  className="opacity-90 bg-[#F2994B] hover:opacity-100 cursor-pointer transition-opacity p-[1em] pl-2 pr-2 text-white font-bold rounded-md"
                  type="submit"
                  value="Cadastrar"
                />
                {error && <p className="error">{error}</p>}
              </form>
              <p>
                Já tem uma conta? <Link to="/login"><span className="text-[#F2994B] font-bold opacity-70 hover:opacity-100 transition-opacity">Clique aqui</span></Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;
