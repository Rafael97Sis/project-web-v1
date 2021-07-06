import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/navBar/navBar";
import './index.css'

function Login() {

  const baseURL = "http://localhost:3006/usuario/login";

  const [usuario, setUsuario] = useState({ email: '', senha: '' })
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUsuario({ ...usuario, [name]: value })
  }

  return (
    <div>

      <h1>
        Login
      </h1>

      <div className='box-lado-esquerdo'>
        <img className='icon-navBar-login' src='/icon_indie.svg' />
      </div>

      <div className='box-lado-direito'>

        <h4> Acessar sua Conta :) </h4>

        <form
          onSubmit={(event) => {
            event.preventDefault()
            logar(usuario)
          }}
        >


          <input
            className='form-dados-1'
            name='email'
            type='email'
            value={usuario.email}
            onChange={handleInputChange}
            placeholder="Email:" />


          <input
            className='form-dados-2'
            name='senha'
            type='password'
            value={usuario.senha}
            onChange={handleInputChange}
            placeholder="Senha:" />

          <button className='button-form-dados'> Logar </button>



        </form>
        <p className='box-senha'>Esqueceu sua senha?<Link style={{ color: ' #9346F4', fontSize: '18px' }} to='/'>Clique aqui </Link> </p>
      </div>


    </div>


  )

  async function logar(usuario) {
    const response = await fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(usuario)
    });
    if (response.ok) {
      const data = await response.json();
      sessionStorage.setItem("access-token", data.token);
      
      if (data.definicao === "funcionario") {
        window.location.href = '/dashbordProfissional'
      }
      else { window.location.href = '/dashbordCliente';}
    }
    else if (response.status === 401) {
      window.alert("Ops, algum problema ocorreu!");
      // window.location.href = '/unauthorized';
      
    } else {
      const data = await response.json();
      window.alert("Ops, algum problema ocorreu!");
    }
  }

} export default Login;