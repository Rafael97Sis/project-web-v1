import React from "react";
import './index.css'
import NavBarProfissional from "../../components/navBarProfissional/navBarProfissional";


function DashbordProfissional() {

  const [update, setUpdate] = React.useState(false)

  const [atendimentos, setAtentimentos] = React.useState([])

  React.useEffect(async () => {

    const response = await fetch("http://localhost:3006/atendimento", {
      method: "GET",
    }).then(res => res.json());

    // const atendimentosFiltered = response.filter(item => item.definicao === "funcionario")

    setAtentimentos(response)

  }, [update])

  return (
    <div>
      <NavBarProfissional />

      <div className='container-Dashboarder-Profissional' >

        <h1 className='title-dashborder-Profissional'>
          Inicio / Dashboarder
        </h1>

        {/* <div className='box-agendados-Profissional' >
          <h1 className='title-box-Profissional' >AGENDADOS</h1>
          <p className='quantidade-box-Profissional'>1</p>
          <p className='tipo-box-Profissional' >CONFIRMADOS</p>
        </div>

        <div className='box-aguardando-Profissional' >
          <h1 className='title-box-Profissional' >AGUARDANDO</h1>
          <p className='quantidade-box-Profissional' > 2</p>
          <p className='tipo-box-Profissional' >PENDENTES</p>
        </div>

        <div className='box-usuarios-Profissional'>
          <ul style={{listStyle:'none'}}> 
            <li className='list-view-dados-Profissional'>
               <a>#</a>
               <a>Nome</a>
               <a>E-mail</a>
            </li>
          </ul>
        </div> */}

        {/* <div className='box-comentarios-Profissional'>
        <ul style={{listStyle:'none'}}> 
            <li className='list-view-dados'>
               <a>#</a>
               <a>Nome</a>
               <a>E-mail</a>
            </li>
          </ul>

        </div> */}

<div style={{ display: 'block' }}>
          <p style={{ fontStyle: 'italic', color: '#9346f4', fontSize: '18px' }} > Serviços Novos </p>
          <table>
            <tr>
              <th>CÓDIGO OS</th>
              <th>ATIVIDADE</th>
              <th>INSUMO</th>
              <th>ID FUNCIONÁRIO</th>
              <th>STATUS ATENDIMENTO</th>
              <th>DATA AGENDADA</th>
              <th>COMENTÁRIO</th>
              <th>AÇÃO</th>
            </tr>

            {atendimentos?.filter(atendimento => atendimento.status_atendimento === 'novo').map(atendimento => (
              <tr>
                <td>{atendimento.id}</td>
                <td>{atendimento.atividade}</td>
                <td>{atendimento.insumo}</td>
                <td>{atendimento.id_funcionario}</td>
                <td>{atendimento.status_atendimento}</td>
                <td>{atendimento.data_agendada}</td>
                <td>{atendimento.comentario}</td>
                <td><button onClick={async () => {
                  await fetch(`http://localhost:3006/atendimento/${atendimento.id}`, {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                      "Accept": "application/json"
                    },
                    body: JSON.stringify({ "status_atendimento": "andamento" })
                  }).then(res => setUpdate(!update))
                }}>Aceitar</button></td>
              </tr>
            ))}

          </table>
        </div>

        <div style={{ display: 'block' }}>
          <p style={{ fontStyle: 'italic', color: '#9346f4', fontSize: '18px' }} > Serviços em Andamento </p>
          <table>
            <tr>
              <th>CÓDIGO OS</th>
              <th>ATIVIDADE</th>
              <th>INSUMO</th>
              <th>ID FUNCIONÁRIO</th>
              <th>STATUS ATENDIMENTO</th>
              <th>DATA AGENDADA</th>
              <th>COMENTÁRIO</th>
              <th>AÇÃO</th>
            </tr>

            {atendimentos?.filter(atendimento => atendimento.status_atendimento === 'andamento').map(atendimento => (
              <tr>
                <td>{atendimento.id}</td>
                <td>{atendimento.atividade}</td>
                <td>{atendimento.insumo}</td>
                <td>{atendimento.id_funcionario}</td>
                <td>{atendimento.status_atendimento}</td>
                <td>{atendimento.data_agendada}</td>
                <td>{atendimento.comentario}</td>
                <td><button onClick={async () => {
                  await fetch(`http://localhost:3006/atendimento/${atendimento.id}`, {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                      "Accept": "application/json"
                    },
                    body: JSON.stringify({ "status_atendimento": "finalizado" })
                  }).then(res => setUpdate(!update))
                }}>Finalizar</button></td>
              </tr>
            ))}

          </table>
        </div>

        <div style={{ display: 'block' }}>
          <p style={{ fontStyle: 'italic', color: '#9346f4', fontSize: '18px' }} > Serviços Finalizados </p>
          <table>
            <tr>
              <th>CÓDIGO OS</th>
              <th>ATIVIDADE</th>
              <th>INSUMO</th>
              <th>ID FUNCIONÁRIO</th>
              <th>STATUS ATENDIMENTO</th>
              <th>DATA AGENDADA</th>
              <th>COMENTÁRIO</th>
              <th>AÇÃO</th>
            </tr>

            {atendimentos?.filter(atendimento => atendimento.status_atendimento === 'finalizado').map(atendimento => (
              <tr>
                <td>{atendimento.id}</td>
                <td>{atendimento.atividade}</td>
                <td>{atendimento.insumo}</td>
                <td>{atendimento.id_funcionario}</td>
                <td>{atendimento.status_atendimento}</td>
                <td>{atendimento.data_agendada}</td>
                <td>{atendimento.comentario}</td>
                <td>CONCLUÍDO</td>
              </tr>
            ))}

          </table>
        </div>

      </div>

    </div>

  )

} export default DashbordProfissional;