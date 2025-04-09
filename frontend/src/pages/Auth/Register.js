import styles from "../Auth/Auth.module.css";

//Components
import { Link } from "react-router-dom";

//Hooks
import { useState, useEffect } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmPassword,
    };

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais");
      return;
    }

    console.log(user);
  };

  return (
    <div className={styles.register}>
      <div className={styles.container}>

        <section className={styles.registerLeft}>
          <h1><span className={styles.nameProject}>Art<span>fex</span></span> <br />
          o melhor para sua arte</h1>
        </section>

        <section className={styles.registerRight}>
          <div className={styles.registerCard}>
            <div className={styles.backgroundForm}>
              <h2>Artfex</h2>
              <p className={styles.subtitle}>Cadastre-se</p>
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
        </section>
      </div>
    </div>
  );
};

export default Register;
