import "../Auth/Auth.module.css";

import { Link } from "react-router-dom";

import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
              <h2 className="font-bold text-[#0b3c34] text-4xl mb-[1.2em]">Entrar</h2>
              <form
                className="flex flex-col justify-center mb-[1.5em] pb-[1.5em] border-b border-[#363636] w-[80%]"
                onSubmit={handleSubmit}
              >
                <input
                  className="mb-[1.5em] border-b border-[#363636] pt-[0em] pr-[1em] pb-[1em] pl-[0em] outline-none"
                  type="email"
                  placeholder="E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email || ""}
                />
                <input
                  className="mb-[1.5em] border-b border-[#363636] pt-[0em] pr-[1em] pb-[1em] pl-[0em] outline-none"
                  type="password"
                  placeholder="Senha"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password || ""}
                />
                <input
                  className="opacity-90 bg-[#F2994B] hover:opacity-100 cursor-pointer transition-opacity p-[1em] pl-2 pr-2 text-white font-bold rounded-md"
                  type="submit"
                  value="Cadastrar"
                />
                {error && <p className="error">{error}</p>}
              </form>
              <p>
                Não tem uma conta? <Link to="/register"><span className="text-[#F2994B] font-bold opacity-70 hover:opacity-100 transition-opacity">Clique aqui</span></Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
