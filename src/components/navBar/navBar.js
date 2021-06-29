import React, { useState } from 'react'
import './navBar.css'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavBar() {

    return (

        <div className='container-NavBar'>

            <a href="/">
            {/* <Link to="/"/> */}
                <img className='icon-navBar' src='/logotipo_indie.svg' to="/" /> 
            </a>
           

            <div className='Botoes-Barra-Menu' >

                <ul  style={{listStyle:'none'}}>
                    <li  style={{textDecoration:'none'}}>
                        <a style={{textDecoration:'none'}}> <Link to="/">  Pagina Inicial </Link> </a>
                        <a className='lista-menu'> <Link to="/Login"> Sobre nós </Link>  </a>
                        <a className='lista-menu'> <Link> Preços </Link> </a>
                        <a className='lista-menu'> <Link> Contato </Link>  </a>
                        <a className='button-branco'  >
                            <Link to='/Login'  style={{color:'#FFFFFF'}} >  ACESSAR CONTA </Link> </a>
                    </li>
                </ul>




            </div>

        </div>

    )

}
export default NavBar;