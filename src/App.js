import React from 'react';
import './App.css'
import { BrowserRouter, Route, Switch } from "react-router-dom"


import home from './pages/home'
import Login from './pages/login'
import Cadastro from './pages/cadastro'
import ClienteAgenda from './pages/clienteAgenda'
import ClienteAgendamentos from './pages/clienteAgendamentos'
import DashborderCliente from './pages/dashborderCliente'
import DashboarderProfissional from './pages/dashborderProfissional'


function App() {

  return (

    <BrowserRouter>

      <Switch>
        <Route exact path='/' component={home} />

        <Route exact path='/Login' component={Login} />

        <Route exact path='/Cadastro' component={Cadastro} />

        <Route exact path='/ClienteAgenda' component={ClienteAgenda} />

        <Route exact path='/clienteAgendamentos' component={ClienteAgendamentos} />

        <Route exact path='/dashborderCliente' component={DashborderCliente} />

        <Route exact path='/dashboarderProfissional' component={DashboarderProfissional} />

      </Switch>

    </BrowserRouter>

  );

}

export default App;