import React from "react";
import './index.css'
import NavBarLAteral from "../../components/navBarLateral/navBarLateral";


function ClienteAgenda() {

  return (
    <div>
      <NavBarLAteral />
      <div className='container-Cliente-Agenda' >
      <h1 className='title-cliente-Agenda'>
          Inicio / Agenda
        </h1>
        <button className='buttom-adiciona-calendario'  > + Adicionar</button>
        <img className='buttom-apagar-calendario'  src='/icon-apagar.svg' onClick='apagar' ></img>
      </div>

    </div>


  )

} export default ClienteAgenda;