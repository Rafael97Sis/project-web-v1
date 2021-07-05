import React from 'react';
import './App.css'
import { BrowserRouter, Route, Switch } from "react-router-dom"


import home from './pages/home'
import Login from './pages/login'
import Cadastro from './pages/cadastro'
import ClienteAgenda from './pages/clienteAgenda'
import ClienteAgendamentos from './pages/clienteAgendamentos'
import DashbordCliente from './pages/dashbordCliente'
import DashbordProfissional from './pages/dashbordProfissional'


function App() {

  return (

    <BrowserRouter>

      <Switch>
        <Route exact path='/' component={home} />

        <Route exact path='/Login' component={Login} />

        <Route exact path='/Cadastro' component={Cadastro} />

        <Route exact path='/ClienteAgenda' component={ClienteAgenda} />

        <Route exact path='/profissionalAgenda' component={ClienteAgenda} />

        <Route exact path='/clienteAgendamentos' component={ClienteAgendamentos} />

        <Route exact path='/dashbordCliente' component={DashbordCliente} />

        <Route exact path='/dashbordProfissional' component={DashbordProfissional} />

      </Switch>

    </BrowserRouter>

  );

}

export default App;