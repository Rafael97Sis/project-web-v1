import React from "react";
import './index.css'
import NavBarCliente from "../../components/navBarCliente/navBarCliente";


function ClienteAgenda() {

  return (
    <div>
      <NavBarCliente />
      <div className='container-Cliente-Agenda' >
      <h1 className='title-cliente-Agenda'>
          Inicio / Agenda
        </h1>
        <button className='buttom-adiciona-calendari' src='/icon-apagar.svg'  > + Adicionar</button>

        <img className='buttom-apagar-calendario'  src='/icon-apagar.svg' onClick='apagar' ></img>
      </div>

    </div>


  )

} export default ClienteAgenda;