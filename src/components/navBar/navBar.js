import React, { useState } from 'react'
import './navBar.css'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavBar() {

    return (

        <div className='container-NavBar'>

            <img className='icon-navBar' src='/image-01.jpg' />

            <div className='Botoes-Barra-Menu' >

                <ul  style={{listStyle:'none'}}>
                    <li  style={{textDecoration:'none'}}>
                        <a style={{textDecoration:'none'}}> <Link to="/">  Pagina Inicial </Link> </a>
                        <a className='lista-menu'> <Link to="/Login"> Sobre nós </Link>  </a>
                        <a className='lista-menu'> <Link> Preços </Link> </a>
                        <a className='lista-menu'> <Link> Contato </Link>  </a>
                        <a className='button-branco'  >
                            <Link to='/login' >  Cadastrar! </Link> </a>
                    </li>
                </ul>




            </div>

        </div>

    )

}
export default NavBar;