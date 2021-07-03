import React, { useState, useEffect } from 'react'
import NavBar from "../../components/navBar/navBar";

import './index.css'

function Cadastro() {

  const baseURL = "http://localhost:3006/cadastro";

  const [cadastro, setCadastro] = useState({ nome: '', email: '', definicao: '', cpf_ou_cnpj: '', telefone: '', cep: '', endereco: '', nro: '', bairro: '', senha: '', area_de_atuacao: '', especialidade: '' })
  //const [cadastroConta, setcadastroConta] = useState(cadastroContaState)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCadastro({ ...cadastro, [name]: value })
  }

  async function Cadastrar(cadastro) {
    // const response = await
    fetch(baseURL, {
      method: "POST",
      headers: {
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

          

          //if(!cadastro.nome || !cadastro.email || !cadastro.definicao || !cadastro.cpf_ou_cnpj || !cadastro.telefone || !cadastro.cep || cadastro.endereco || !cadastro.nro || !cadastro.bairro || !cadastro.senha || !cadastro.area_de_atuacao || !cadastro.especialidade) return;
          
          Cadastrar(cadastro)
          setCadastro({ nome: '', email: '', definicao: '', cpf_ou_cnpj: '', telefone: '', cep: '', endereco: '', nro: '', bairro: '', senha: '', area_de_atuacao: '', especialidade: '' })
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
            name='cpf_ou_cnpj'
            type='number'
            value={cadastro.cpf_ou_cnpj}
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

          <select className="segmento"
            name='definicao'
            value={cadastro.definicao}
            onChange={handleInputChange}
          >
            <option selected> Selecione seu tipo de Perfil </option>
            <option value="cliente"> Cliente </option>

            <option value="profissional"> Profissional </option>

            
          </select >


          <h2 style={{ color: '#9346F4', fontSize: '16px' }} > Qual sua área de Atuação? </h2>

          <select className="segmento"
            name='area_de_atuacao'
            value={cadastro.area_de_atuacao}
            onChange={handleInputChange}
          >
            <option selected> Selecione sua Area de Atuação ! </option>
            <option value="informatica">Informatica</option>
            <option value="eletrica">Eletrica</option>

          </select>

          {/* inicio Especialidade  */}
          <h2 style={{ color: '#9346F4', fontSize: '16px' }} >  Qual sua Especialidade ? </h2>

          <select className="segmento"
            name='especialidade'
            value={cadastro.especialidade}
            onChange={handleInputChange}
          >
            <option selected > Selecione sua Especialidade! </option>
            <option value="informatica">DBA</option>
            <option value="eletrica">Eletrica</option>
            <option value="informatica">Pragramador</option>
            <option value="informatica">Tecnico Informatica </option>

          </select>

          <button className='button-cadastra'> Cadastrar </button>

        </form>

      </div>

      <div className='roda-pe'></div>


    </div>


  )




} export default Cadastro;