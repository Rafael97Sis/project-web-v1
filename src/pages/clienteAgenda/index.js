import React, { useState, useEffect } from 'react'
import './index.css'
import NavBarCliente from "../../components/navBarCliente/navBarCliente";


function ClienteAgenda() {

  const baseURL = "http://localhost:3006/atendimento";

  const [profissionais,setProfissionais] = useState([])

  const [atendimento, setAtendimento] = useState({ atividade: '', insumo:'', id_funcionario:'', data_agendada:'', status_atendimento:'', comentario:'' })
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

  useEffect(async ()=>{

    const response = await fetch("http://localhost:3006/usuario", {
      method: "GET",
    }).then(res => res.json());

    setProfissionais(response)

    //const responseFiltered = response.filter(item => item.definicao === "profissional")

    //console.log("response",responseFiltered);

  },[])


  return (
    <div>
      <NavBarCliente />

      <form onSubmit={(event) => {
        event.preventDefault();

        Adicionar(atendimento)
        setAtendimento({ atividade: '', insumo:'', id_funcionario:'', data_agendada:'', status_atendimento:'', comentario:''  })
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
            <option value="Instalações gerais"> Instalações gerais </option>
            <option value="Manutenção de rede elétrica"> Manutenção de rede elétrica </option>
            <option value="Passagem de cabeamento de rede"> Passagem de cabeamento de rede </option>
            <option value="Passagem de cabeamento elétrico"> Passagem de cabeamento elétrico </option>
            <option value="Hospedagem e manutenção de servidores"> Hospedagem e manutenção de servidores</option>
            <option value="Solicitações de software"> Solicitações de software </option>
            <option value="Solicitações de hardware"> Solicitações de hardware </option>
            <option value="Monitoramento residencial"> Monitoramento residencial </option>
            <option value="Firewall e anti-vírus"> Firewall e anti-vírus  </option>
            <option value="Quarentena e controle de perdas"> Quarentena e controle de perdas </option>
            <option value="Manutenção, instalação e reposição de móveis, tomadas e luminárias elétricas ">Manutenção, instalação e reposição de móveis, tomadas e luminárias elétricas  </option>
            <option value="Implantação de resfriamento por metro quadrado">Implantação de resfriamento por metro quadrado  </option>
            <option value="Instalação de aparelhagem (servidores)">Instalação de aparelhagem (servidores)  </option>
            <option value="Analista de suporte telecom">Analista de suporte telecom  </option>
            <option value="banco de dados"> banco de dados </option>
            <option value="Infra"> Infra </option>
            <option value="analista de suporte N1"> analista de suporte N1 </option>
            <option value="analista de suporte N2"> analista de suporte N2 </option>

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
            name='insumo'
            value={atendimento.insumo}
            onChange={handleInputChange}
          >
            <option selected> - Insumo - </option>
            {profissionais?.map(profissional => (
              <option value={profissional.id}>{profissional.nome}</option>
            ))}
            
          </select >


          <br /><br />
          <h2 style={{ color: '#9346F4', fontSize: '18px', marginLeft: '20px' }} >
            Selecione dia e hora ! </h2>

          {/* <input className='input-date' type="number"
            name='data_agendada '
            // value={atendimento.data_agendada }
            // onChange={handleInputChange}
          /> */}
          
          <br />

          <br />

          <div className='box-comentario'>
            <h2 style={{ color: '#9346F4', fontSize: '18px', marginLeft: '23px' }} >Descricao do Servico:</h2>
            {/* <label className='title-msg' for="msg" >Mensagem:</label> */}
            <textarea className='input-comentario'
              id="msg" 
              placeholder="Descricao do Servico:"
              name='comentario'
              value={atendimento.comentario }
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