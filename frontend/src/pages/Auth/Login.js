import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react"
import '../../resposiveGlobal.css';
//import images
import Logo from '../../assets/images/logo.svg'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user ={
      email,
      password
    }
    try{
      const response = await axios.post("http://127.0.0.1:5000/user/login", user);
      console.log(response.data)
      navigate('/')
    }catch(error){
      console.error(error.response)
    }
  };

// função de visualizar senha
  const inputPasswordRef = useRef(null);
  const btnEyePasswordIconRef = useRef(null);

  const seePassword = (e) => {
    e.preventDefault();

    const input = inputPasswordRef.current;
    const icon = btnEyePasswordIconRef.current;

    if (icon.className === "fa-regular fa-eye-slash absolute right-[5px] top-[15px] cursor-pointer") {
      input.type = "text";
      icon.className = "fa-regular fa-eye absolute right-[5px] top-[15px] cursor-pointer";
    } else {
      input.type = "password";
      icon.className = "fa-regular fa-eye-slash absolute right-[5px] top-[15px] cursor-pointer";
    }
  }

  const verifyLetterInput = () => {

    const value = inputPasswordRef.current.value.trim();
    const icon = btnEyePasswordIconRef.current;
    

    if (!value) {
      icon.className = " hidden";
    } else {
      icon.className = "block";
    }
    
  }

  return (
    <div className="min-h-screen flex justify-center items-center container">
      <div className="flex justify-center items-center w-full wrapper-auth">
        {/* REGISTER LEFT */}
        <section className="flex-1 bg-[url('./images/tela_registro.png')] bg-cover bg-center h-screen flex flex-col items-center justify-center register-left">
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
          <div className="p-[5rem] register-form">
            <div className="flex justify-center items-center flex-col box-input">
              <img src={Logo} className="logo" />
              <h2 className="font-bold text-[#0b3c34] text-4xl mb-[1.2em]">Faça seu login</h2>
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
                <div className="relative">
                  <input
                    ref={inputPasswordRef}
                    onInput={verifyLetterInput}
                    className="mb-[1.5em] border-b border-[#363636] pt-[0em] pr-[1em] pb-[1em] pl-[0em] outline-none w-full"
                    type="password"
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password || ""}
                  />
                <button onClick={seePassword} className="hidden" ref={btnEyePasswordIconRef} >
                  <i className="fa-regular fa-eye-slash absolute right-[5px] top-[15px] cursor-pointer"></i>
                </button>

                </div>
                <input
                  className="opacity-90 bg-[#F2994B] hover:opacity-100 cursor-pointer transition-opacity p-[1em] pl-2 pr-2 text-white font-bold rounded-md"
                  type="submit"
                  value="Entrar"
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
