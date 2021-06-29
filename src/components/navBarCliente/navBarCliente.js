import React, { useState } from 'react'
import './navBarCliente.css'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavBarCliente() {
    return (

        <div>
            <div className='container-NavBarCliente'>
                <a href="/">
                    {/* <Link to="/"/> */}
                    <img className='icon-navBar' src='/logotipo_indie_branco.svg' to="/" />
                </a>

                <li style={{textDecoration:'none'}} >
                     <a  style={{textDecoration:'none'}} > <Link to="/dashbordCliente"> Inicio </Link> </a>
                     <a> <Link to="/ClienteAgenda"> Agenda </Link> </a>
                     <a> <Link to="/dashbordCliente"> Serviços </Link> </a>
                </li>


            </div>
        </div>
    )
}
export default NavBarCliente;