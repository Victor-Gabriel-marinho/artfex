import "./Home.css";

const Home = () => {
  return (
    <div>
      <header>
        <h1>ArtFex</h1>
        <nav>
          <input type="text" name="pesquisa" id="" placeholder="Buscar itens"></input>
          <ul className="central">
            <li >
              Sobre nós
            </li>
            <li className="home">
              Home
            </li>
            <li>
              Catálogo
            </li>
          </ul>
          <ul className="direita">
            <li className="login">Login</li>
            <li className="criar-conta">Criar conta</li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Home