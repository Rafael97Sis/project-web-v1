import React from "react"
import NavBar from "../../components/navBar/navBar";

import './index.css'

function Cadastro() {

  return (

    <div>

      <NavBar />

      <div className='container-form'>
        <h1 style={{color:'#9346F4', fontSize:'30px' }}> Crie sua conta e comece já! </h1>

        <form>

          <input className='form-dados-cadastro-0' name='nome' type='text' placeholder="Nome completo:" />
          <input className='form-dados-cadastro-0' name='email' type='email' placeholder="Digite Email:" />

          <h2 style={{color:'#9346F4', fontSize:'18px'}} > Vocé é um cliente ou profissional? </h2>

          <input className='form-checkbox' type="checkbox" id="cliente" name="cliente" value="Bike" />
          <label className='form-checkbox'  for="cliente"> Cliente </label>

          <input className='form-checkbox' type="checkbox" id="profissional" name="profissional" value="Bike" />
          <label className='form-checkbox' for="profissional"> Profissional </label>
          <br/>
          <input className='form-dados-cadastro-1' type='number' name='cnpj' placeholder='CNPJ' />
          <input className='form-dados-cadastro-1' type='number' name='telefone' placeholder='Telefone: (99) - 9999 - 9999' />
          <br/>
          <input className='form-dados-cadastro-1' type='number' name='cep' placeholder='CEP:' />
          <input className='form-dados-cadastro-1' type='text' name='endereco' placeholder='Endereço:' />
          <br/>
          <input className='form-dados-cadastro-1' type='number' name='numero' placeholder='Nº' />
          <input className='form-dados-cadastro-1' type='text' name='bairro' placeholder='Bairro:' />
          <br/>
          <button className='button-cadastra'> Cadastrar </button>

        </form>

      </div>

      <div className='roda-pe'></div>


    </div>


  )

} export default Cadastro;