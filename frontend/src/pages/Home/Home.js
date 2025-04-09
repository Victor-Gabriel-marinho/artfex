import styles from "../Home/Home.module.css"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <header>
        <h1>ArtFex</h1>
        <nav>
          <input className={styles['buscar-itens']} type="text" name="pesquisa" id="" placeholder="Buscar itens"></input>
          <ul className= {styles.central}>
            <li >
              Sobre nós
            </li>
            <li className= {styles.home}>
              Home
            </li>
            <li>
              Catálogo
            </li>
          </ul>
          <ul className= {styles.direita}>
            <li className={styles.login} > <Link to="/login"> Login </Link></li>
            <li className={styles['criar-conta']}> <Link to="/register">Criar conta</Link> </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Home