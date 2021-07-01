import React from "react";
import './index.css'
import NavBarProfissional from "../../components/navBarProfissional/navBarProfissional";


function DashbordProfissional() {

  return (
    <div>
      <NavBarProfissional />

      <div className='container-Dashboarder-Profissional' >

        <h1 className='title-dashborder-Profissional'>
          Inicio / Dashboarder
        </h1>

        <div className='box-agendados-Profissional' >
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
        </div>

        <div className='box-comentarios-Profissional'>
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

} export default DashbordProfissional;