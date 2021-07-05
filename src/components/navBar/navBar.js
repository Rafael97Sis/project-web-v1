import React, { useState } from 'react'
import './navBar.css'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavBar() {

    return (

        <div>

                <ul className='box-ul' style={{ listStyle: 'none' }}>
                    <li className='listaLinks' >

                        <a href="/">
                            {/* <Link to="/"/> */}
                            <img className='icon-navBar' src='/logotipo_indie.svg' to="/" />
                        </a>


                    </li>

                    <li className='listaLinks'  style={{ textDecoration: 'none' }}>
                        <a style={{ textDecoration: 'none' }}> <Link to="/">  Pagina Inicial </Link> </a>
                    </li>

                    <li className='listaLinks'>
                        <a > <Link to="/Login"> Sobre nós </Link>  </a>
                    </li>

                    <li className='listaLinks'>
                        <a > <Link> Preços </Link> </a>
                    </li>

                    <li className='listaLinks'>
                        <a > 
                            <Link> Contato </Link> 
                        </a>
                    </li>

                    <li  className='listaLinks'>
                        <a  src='/icon-login-home.svg' to='/Login' href='/Login'>
                            <img src='/icon-login-home.svg' />
                        </a>
                    </li>

                    <li className='listaLinks'>
                        <a className='button-branco'  >
                            <Link to='/Cadastro'> CRIE SUA CONTA </Link>
                        </a>
                    </li>

                </ul>

        </div>

    )

}
export default NavBar;