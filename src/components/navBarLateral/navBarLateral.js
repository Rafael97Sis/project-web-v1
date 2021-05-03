import React, { useState } from 'react'
import './navBarLateral.css'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavBarLAteral() {
    return (

        <div>
            <div className='container-menu-lateral'>

                <img className='logo-menu-lateral' src='/image-icon.svg' />

                <div className='buttom-menu'>
                    <ul style={{ listStyle: 'none' }}>
                        <li className='box-lista-menu' >

                            <Link to='/'>
                                <p>
                                    <img className='icon-navbar-lateral'
                                        src='/pagina-inicial.svg' /> &nbsp; Inicío 
                                </p>
                            </Link>

                            <Link to='/ClienteAgenda'>
                                <p>
                                    <img className='icon-navbar-lateral'
                                        src='agenda.svg' /> &nbsp;  Agenda 
                            </p>
                            </Link>

                            <Link to='/ClienteAgendamentos'>
                                <p>
                                    <img className='icon-navbar-lateral'
                                        src='/servico.svg' /> &nbsp; Serviços 
                            </p>
                            </Link>
                        </li>

                    </ul>
                </div>

            </div>



        </div>
    )
}
export default NavBarLAteral;