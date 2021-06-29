import React from "react";
import './index.css'
import NavBarLAteral from "../../components/navBarLateral/navBarLateral";


function DashboardProfissional() {

  return (
    <div>
      <NavBarLAteral />

      <div className='container-Dashboarder-Profissional' >

        <h1 className='title-dashborder'>
          Inicio / Dashboarder
        </h1>

        <div className='box-agendados' >
          <h1 className='title-box' >AGENDADOS</h1>
          <p className='quantidade-box'>1</p>
          <p className='tipo-box' >CONFIRMADOS</p>
        </div>

        <div className='box-aguardando' >
          <h1 className='title-box' >AGUARDANDO</h1>
          <p className='quantidade-box' > 2</p>
          <p className='tipo-box' >PENDENTES</p>
        </div>

        <div className='box-usuarios'>
          <ul style={{listStyle:'none'}}> 
            <li className='list-view-dados'>
               <a>#</a>
               <a>Nome</a>
               <a>E-mail</a>
            </li>
          </ul>
        </div>

        <div className='box-comentarios'>
        <ul style={{listStyle:'none'}}> 
            <li className='list-view-dados'>
               <a>#</a>
               <a>Nome</a>
               <a>E-mail</a>
            </li>
          </ul>

        </div>

      </div>

    </div>

  )

} export default DashboardProfissional;