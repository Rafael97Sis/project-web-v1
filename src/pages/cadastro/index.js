import React, { useState, useEffect } from 'react'
import NavBar from "../../components/navBar/navBar";

import './index.css'

function Cadastro() {

  const baseURL = "http://localhost:3006/cadastra";

  const [cadastro, setCadastro] = useState({ nome:'',email: '', definicao: '', cnpj: '', cpf: '', telefone: '', cep: '', endereco: '', nro: '', bairro: '', senha: '' })
  //const [cadastroConta, setcadastroConta] = useState(cadastroContaState)
 
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCadastro({ ...cadastro, [name]: value })
    }

    async function Cadastrar(cadastro) {
      // const response = await
       fetch (baseURL, {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(cadastro)
      });
    }

  return (

    <div>
      <NavBar />

      <div className='container-form'>
        <h1 style={{ color: '#9346F4', fontSize: '25px' }}> Crie sua conta e comece já! </h1>

        <form onSubmit={(event) => {
            event.preventDefault();
            //if(!cadastro.nome || !cadastro.email || !cadastro.definicao)return;
            Cadastrar(cadastro)
            setCadastro({nome:'',email: '', definicao: '', cnpj: '', cpf: '', telefone: '', cep: '', endereco: '', nro: '', bairro: '', senha: ''})
            alert("cadastro ok ")
          }}
        >

          <input
            className='form-dados-cadastro-1'
            name='nome'
            type='text'
            value={cadastro.nome}
            onChange={handleInputChange}
            placeholder="Nome completo:"
          />


          <input 
          className='form-dados-cadastro-1'
          type='number'
          name='cep' 
          value={cadastro.cep}
          onChange={handleInputChange}
          placeholder='CEP:' 
          />

          <input 
          className='form-dados-cadastro-1'
          name='email'
          type='email' 
          value={cadastro.email}
          onChange={handleInputChange}
          placeholder="Digite Email:" />

          <input
           className='form-dados-cadastro-1'
           name='endereco' 
           type='text'
           value={cadastro.endereco}
           onChange={handleInputChange}
           placeholder="Endereço:" />

          <input 
          className='form-dados-cadastro-1' 
          name='cpf' 
          type='number'
          value={cadastro.cpf}
          onChange={handleInputChange} 
          placeholder="CNPJ ou CPF :" />

          <input 
          className='form-dados-cadastro-1' 
          type='number'
          name='nro'
          value={cadastro.nro}
          onChange={handleInputChange}
          placeholder='Nº ' />

          <input 
          className='form-dados-cadastro-1' 
          type='number' 
          name='telefone'
          value={cadastro.telefone}
          onChange={handleInputChange}
          placeholder='Telefone:' />

          <input 
          className='form-dados-cadastro-1' 
          name='bairro' 
          type='text' 
          value={cadastro.bairro}
          onChange={handleInputChange}
          placeholder="Bairro:" />

          <input 
          className='form-dados-cadastro-1' 
          name='senha' 
          type='password'
          value={cadastro.senha}
          onChange={handleInputChange}
          placeholder="Senha:" />

          <input className='form-dados-cadastro-1' name='senha' type='password' placeholder="Confirmar Senha:" />

          <h2 style={{ color: '#9346F4', fontSize: '16px' }} > Vocé é um cliente ou profissional? </h2>

          <select className="segmento">
            <option 
            name='cliente' 
            value={cadastro.definicao}
            onChange={handleInputChange}
            >Cliente</option>

            <option 
            name='profissional' 
            value={cadastro.definicao}
            onChange={handleInputChange}
            >Profissional</option>
            
            <option value="perfil" selected> Selecione seu tipo de Perfil </option>
          </select >

          {/* <input className='form-checkbox' type="checkbox" id="cliente" name="cliente" value="Bike" />
          <label className='form-checkbox'  for="cliente"> Cliente </label>

          <input className='form-checkbox' type="checkbox" id="profissional" name="profissional" value="Bike" />
          <label className='form-checkbox' for="profissional"> Profissional </label> */}
          {/* <h2 style={{ color: '#9346F4', fontSize: '16px' }} >  Tipo de Segmento? </h2>

          <select className="segmento">
            <option value="informatica">Informatica</option>
            <option value="eletrica">Eletrica</option>
            <option value="segmento" selected> Selecione seu tipo de Segmento</option>
          </select> */}

          <button className='button-cadastra'> Cadastrar </button>

        </form>

      </div>

      {/* <div className='roda-pe'></div> */}


    </div>


  )
  



} export default Cadastro;