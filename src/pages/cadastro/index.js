import React, { useState, useEffect } from 'react'
import NavBar from "../../components/navBar/navBar";

import './index.css'

const atividade_insumo = {
  "Eletrica": ["Passagem de cabeamento elétrico", "Passagem de cabeamento de rede", "Instalações gerais", "Manutenção de rede elétrica"],
  "Infra": ['Hospedagem e manutenção de servidores', "Solicitações de software", "Solicitações de hardware"],
  "Segurança": ["Monitoramento residencial", "Firewall e anti-vírus", "Quarentena e controle de perdas"],
  "Serviços Gerais": ["Manutenção, instalação e reposição de móveis, tomadas e luminárias elétricas", "Implantação de resfriamento por metro quadrado", "Instalação de aparelhagem (servidores)"],
  "TI": ["Analista de suporte telecom", "banco de dados", "Infra", "analista de suporte N1", "analista de suporte N2"]
}

function Cadastro() {

  const baseURL = "http://localhost:3006/usuario";

  const [cadastro, setCadastro] = useState({ nome: null, email: null, definicao: null, cpf_ou_cnpj: null, telefone: null, cep: null, endereco: null, nro: null, bairro: null, senha: null, area_de_atuacao: null, especialidade: null })
  //const [cadastroConta, setcadastroConta] = useState(cadastroContaState)

  console.log('cadastro', cadastro);

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCadastro({ ...cadastro, [name]: value })
  }

  async function Cadastrar(e) {

    e.preventDefault()

    if (cadastro.senha !== e.target.confirmaSenha.value) {
      alert('A senha de confimação não confere!')
      return;
    }

    if (!cadastro.definicao) {
      alert('Escolha seu perfil!')
      return;
    }

    if (!cadastro.area_de_atuacao) {
      alert('Escolha seu area de atuação!')
      return;
    }

    if (!cadastro.especialidade) {
      alert('Escolha sua especialidade!')
      return;
    }

    //if(!cadastro.nome || !cadastro.email || !cadastro.definicao || !cadastro.cpf_ou_cnpj || !cadastro.telefone || !cadastro.cep || cadastro.endereco || !cadastro.nro || !cadastro.bairro || !cadastro.senha || !cadastro.area_de_atuacao || !cadastro.especialidade) return;

    const response = await fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(cadastro),

    });

    setCadastro({ nome: null, email: null, definicao: null, cpf_ou_cnpj: null, telefone: null, cep: null, endereco: null, nro: null, bairro: null, senha: null, area_de_atuacao: null, especialidade: null })
    alert("cadastro ok ")
    console.log("response", response);
  }

  return (

    <div>
      <NavBar />

      <div className='container-form'>
        <h1 style={{ color: '#9346F4', fontSize: '25px' }}> Crie sua conta e comece já! </h1>

        <form onSubmit={Cadastrar}>

          <input
            required
            className='form-dados-cadastro-1'
            name='nome'
            type='text'
            value={cadastro.nome}
            onChange={handleInputChange}
            placeholder="Nome completo:"
          />


          <input
            required
            className='form-dados-cadastro-1'
            type='number'
            name='cep'
            value={cadastro.cep}
            onChange={handleInputChange}
            placeholder='CEP:'
          />

          <input
            required
            className='form-dados-cadastro-1'
            name='email'
            type='email'
            value={cadastro.email}
            onChange={handleInputChange}
            placeholder="Digite Email:" />

          <input
            required
            className='form-dados-cadastro-1'
            name='endereco'
            type='text'
            value={cadastro.endereco}
            onChange={handleInputChange}
            placeholder="Endereço:" />

          <input
            required
            className='form-dados-cadastro-1'
            name='cpf_ou_cnpj'
            type='number'
            value={cadastro.cpf_ou_cnpj}
            onChange={handleInputChange}
            placeholder="CNPJ ou CPF :" />

          <input
            required
            className='form-dados-cadastro-1'
            type='number'
            name='nro'
            value={cadastro.nro}
            onChange={handleInputChange}
            placeholder='Nº ' />

          <input
            required
            className='form-dados-cadastro-1'
            type='number'
            name='telefone'
            value={cadastro.telefone}
            onChange={handleInputChange}
            placeholder='Telefone:' />

          <input
            required
            className='form-dados-cadastro-1'
            name='bairro'
            type='text'
            value={cadastro.bairro}
            onChange={handleInputChange}
            placeholder="Bairro:" />

          <input
            required
            className='form-dados-cadastro-1'
            name='senha'
            type='password'
            value={cadastro.senha}
            onChange={handleInputChange}
            placeholder="Senha:" />

          <input required className='form-dados-cadastro-1' name='confirmaSenha' type='password' placeholder="Confirmar Senha:" />

          <h2 style={{ color: '#9346F4', fontSize: '16px' }} > Vocé é um cliente ou profissional? </h2>

          <select className="segmento"
            name='definicao'
            value={cadastro.definicao}
            onChange={handleInputChange}
          >
            <option value={null} selected> Selecione seu tipo de Perfil </option>
            <option value="cliente"> Cliente </option>

            <option value="funcionario"> Profissional </option>


          </select >


          {cadastro.definicao === 'funcionario' ?
            <>
              <h2 style={{ color: '#9346F4', fontSize: '16px' }} > Qual sua área de Atuação? </h2>

              <select className="segmento"
                name='area_de_atuacao'
                value={cadastro.area_de_atuacao}
                onChange={handleInputChange}
              >
                <option value={null} selected> Selecione sua Area de Atuação ! </option>
                {/* <option selected> - Atividade - </option> */}
                <option value="Eletrica"> Eletrica </option>
                <option value="Infra"> Infra </option>
                <option value="Segurança"> Segurança </option>
                <option value="Serviços Gerais"> Serviços Gerais </option>
                <option value="TI"> TI </option>

              </select>

              {/* inicio Especialidade  */}
              <h2 style={{ color: '#9346F4', fontSize: '16px' }} >  Qual sua Especialidade ? </h2>

              <select className="segmento"
                name='especialidade'
                value={cadastro.especialidade}
                onChange={handleInputChange}
              >
                <option value={null} selected > Selecione sua Especialidade! </option>
                {atividade_insumo[cadastro.area_de_atuacao]?.map(atividade => (
                  <option value={atividade}>{atividade}</option>
                ))}

              </select>
            </>

            : <></>
          }
          <button type="submit" className='button-cadastra'> Cadastrar </button>

        </form>

      </div>

      {/* <div className='roda-pe'></div> */}


    </div>


  )




} export default Cadastro;