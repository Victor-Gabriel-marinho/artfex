import "./Auth.css";

//Components
import { Link } from "react-router-dom";

//Hooks
import { useState, useEffect} from "react";

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {

    e.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmPassword,
    };

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais")
      return 
    }

    console.log(user);
  };

  return (
    <div id="register">
      <h2>Artfex</h2>
      <p className="subtitle">Cadastre-se</p>
      <div className="container">
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
  );
};

export default Register;
