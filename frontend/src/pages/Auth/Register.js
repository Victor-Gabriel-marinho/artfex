import "./Auth.css";

//Components
import {Link} from 'react-router-dom'

//Hooks
// import { UseState, UseEffect } from "react";

const Register = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <h2>Artfex</h2>
      <p className="subtitle">Cadastre-se</p>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <input type="password" placeholder="Confirme sua senha" />
          <input type="submit" value='Cadastrar' />
        </form>
        <p> Já tem uma conta? <Link to='/login' >Clique aqui</Link> </p>
      </div>
    </div>
  )
}

export default Register