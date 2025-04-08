import "./Auth.css";

const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="login">
      <div className="container">
        <section className="login--left">
          <h1>
            <span className="name--project">Artfex</span> <br />o melhor para
            sua arte
          </h1>
        </section>

        <section className="login--rigth">
          <div className="login--card">
            <div className="background--form">
              <h2>Artfex</h2>
              <p className="subtitle">Login</p>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="E-mail"
                />
                <input
                  type="password"
                  placeholder="Senha"
                />
                <input type="submit" value="Entrar" />
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
