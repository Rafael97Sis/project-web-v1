import React, { useState, useEffect } from 'react'
import './index.css'
import NavBarCliente from "../../components/navBarCliente/navBarCliente";


const atividade_insumo = {
  "Eletrica": ["Passagem de cabeamento elétrico", "Passagem de cabeamento de rede", "Instalações gerais", "Manutenção de rede elétrica"],
  "Infra": ['Hospedagem e manutenção de servidores', "Solicitações de software", "Solicitações de hardware"],
  "Segurança": ["Monitoramento residencial", "Firewall e anti-vírus", "Quarentena e controle de perdas"],
  "Serviços Gerais": ["Manutenção, instalação e reposição de móveis, tomadas e luminárias elétricas", "Implantação de resfriamento por metro quadrado", "Instalação de aparelhagem (servidores)"],
  "TI": ["Analista de suporte telecom", "banco de dados", "Infra", "analista de suporte N1", "analista de suporte N2"]
}

function ClienteAgenda() {

  const baseURL = "http://localhost:3006/atendimento";

  const [profissionais, setProfissionais] = useState([])

  const [atendimento, setAtendimento] = useState({ atividade: null, insumo: null, id_funcionario: null, data_agendada: null, status_atendimento: null, comentario: null })
  //const [cadastroConta, setcadastroConta] = useState(cadastroContaState)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setAtendimento({ ...atendimento, [name]: value })
  }

  async function Adicionar(atendimento) {
    // const response = await
    fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(atendimento)
    });
  }

  useEffect(async () => {

    const response = await fetch("http://localhost:3006/usuario", {
      method: "GET",
    }).then(res => res.json());

    const responseFiltered = response.filter(item => item.definicao === "funcionario")

    setProfissionais(responseFiltered)


    //console.log("response",responseFiltered);

  }, [])

  console.log('atendimento', atendimento);


  return (
    <div>
      <NavBarCliente />

      <form onSubmit={(event) => {
        event.preventDefault();

        Adicionar(atendimento)
        setAtendimento({ atividade: null, insumo: null, id_funcionario: null, data_agendada: null, status_atendimento: null, comentario: null })
        alert("cadastro ok ")
      }}

      >
        <div className='container-Cliente-Agenda' >
          <h1 className='title-cliente-Agenda'>
            Inicio / Agenda
          </h1>
          <button className='buttom-adiciona-calendario' src='/icon-apagar.svg'  > Adicionar</button>

          <img className='buttom-apagar-calendario' src='/icon-apagar.svg' onClick='apagar' ></img>
        </div>


        <div className=' container-add-agenda'>

          <h2 style={{ color: '#9346F4', fontSize: '18px', marginLeft: '20px' }} > Selecione a Atividade! </h2>
          <select className="input-select"
            name='atividade'
            value={atendimento.atividade}
            onChange={handleInputChange}
          >
            <option selected> - Atividade - </option>
            <option value="Eletrica"> Eletrica </option>
            <option value="Infra"> Infra </option>
            <option value="Segurança"> Segurança </option>
            <option value="Serviços Gerais"> Serviços Gerais </option>
            <option value="TI"> TI </option>

          </select >

          <br />

          <h2 style={{ color: '#9346F4', fontSize: '18px', marginLeft: '20px' }} > Selecione o tipo de insumo que Deseja ! </h2>
          <select className="input-select"
            name='insumo'
            value={atendimento.insumo}
            onChange={handleInputChange}
          >
            <option selected> - Insumo - </option>
            {atividade_insumo[atendimento.atividade]?.map(atividade => (
              <option value={atividade}>{atividade}</option>
            ))}

          </select >
          <br />
          {/*  select Profissional  */}
          <h2 style={{ color: '#9346F4', fontSize: '18px', marginLeft: '20px' }} > Digite Profissional que Deseja ! </h2>
          {/*<input type='number' className="input-select"
            name='id_funcionario'
            value={atendimento.id_funcionario}
            onChange={handleInputChange}
          />*/}
          <select className="input-select"
            name='id_funcionario'
            value={atendimento.id_funcionario}
            onChange={handleInputChange}
          >
            <option selected> - Funcionário - </option>
            {profissionais?.map(profissional => (
              <option value={profissional.id}>{profissional.nome}</option>
            ))}

          </select >


          <br /><br />
          <h2 style={{ color: '#9346F4', fontSize: '18px', marginLeft: '20px' }} >
            Selecione dia e hora ! </h2>

          <input className='input-date' type="date"
            name='data_agendada'
            value={atendimento.data_agendada}
            onChange={handleInputChange}
          />

          <br />

          <br />

          <div className='box-comentario'>
            <h2 style={{ color: '#9346F4', fontSize: '18px', marginLeft: '23px' }} >Descricao do Servico:</h2>
            {/* <label className='title-msg' for="msg" >Mensagem:</label> */}
            <textarea className='input-comentario'
              id="msg"
              placeholder="Descricao do Servico:"
              name='comentario'
              value={atendimento.comentario}
              onChange={handleInputChange}
            ></textarea>
          </div>



          {/* <input className='input-img' type="image" src='/add-img.png' /> */}

          <br />


        </div>



        {/*  <div className='box-direita-foto' >
          <h2 className='title-foto'> + Add a foto ! </h2>
          <input className='input-img' type="image" src='/add-img.png' />
        </div>*/}

      </form>
    </div>



  )

} export default ClienteAgenda;