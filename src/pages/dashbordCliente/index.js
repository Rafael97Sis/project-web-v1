import React from "react";
import './index.css'
import NavBarCliente from "../../components/navBarCliente/navBarCliente";



function DashbordCliente() {

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
      <NavBarCliente />

      <div className='container-Dashboarder-Cliente' >

        <h1 className='title-dashborder-cliente'>
          Inicio / Dashboarder - Cliente
        </h1>

        {/* <div className='box-agendamento-cliente' >
          <h1 className='title-box-cliente' >MEUS AGENDAMENTOS</h1>
          <p className='quantidade-box-cliente'>2</p>
          <p className='tipo-box-cliente' >CONFIRMADOS</p>
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
                
              </tr>
            ))}

          </table>
        </div>


      </div>
    </div>


  )

} export default DashbordCliente;