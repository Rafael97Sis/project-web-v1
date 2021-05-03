import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/navBar/navBar";
import './index.css'

function Login() {

  return (
    <div>


      <h1>
        Login
      </h1>

      <div className='box-lado-esquerdo'>
        <img className='icon-navBar-login' src='/login-001.svg' />
      </div>


      <div className='box-lado-direito'>

        <h4> Acessar sua Conta :) </h4>
        <form>

          <input className='form-dados-1' name='email' type='email' placeholder="Email:" />
          <input className='form-dados-2' name='senha' type='password' placeholder="Senha:" />

          <button className='button-form-dados'> Entrar </button>

        </form>
        <p className='box-senha'>Esqueceu sua senha?<Link style={{color:' #9346F4', fontSize:'18px'}} to='/'>Clique aqui </Link> </p>
      </div>


    </div>


  )

} export default Login;