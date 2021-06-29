import React from "react";
import './index.css'
import NavBarLAteral from "../../components/navBarLateral/navBarLateral";



function DashbordCliente() {

  return (
    <div>
      <NavBarLAteral />

      <div className='container-Dashboarder-Cliente' >

        <h1 className='title-dashborder-cliente'>
          Inicio / Dashboarder - Cliente
        </h1>

        <div className='box-agendamento-cliente' >
          <h1 className='title-box-cliente' >MEUS AGENDAMENTOS</h1>
          <p className='quantidade-box-cliente'>2</p>
          <p className='tipo-box-cliente' >CONFIRMADOS</p>
        </div>

        <div className='box-01'>
        <p style={{fontStyle:'italic', color:'#9346f4', fontSize:'18px'}} >COMENTARIOS RECENTES</p>
          <ul style={{ listStyle: 'none' }}>
            <li className='list-view-dados-cliente'>
              <a># </a>
              <a>Nome</a>
              <a>E-mail</a>
            </li>
          </ul>
        </div>

        <div className='box-02'>
        <p style={{fontStyle:'italic', color:'#9346f4', fontSize:'18px'}} >ULTIMOS SERVIÇOS</p>
          <ul style={{ listStyle: 'none' }}>
            <li className='list-view-dados-cliente'>
              <a>#</a>
              <a>Nome</a>
              <a>E-mail</a>
            </li>
          </ul>
        </div>
      </div>
    </div>


  )

} export default DashbordCliente;