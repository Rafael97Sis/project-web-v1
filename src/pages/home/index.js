import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/navBar/navBar";
import './index.css'

function Home() {

  return (

    <div>
      <NavBar />

      <div className='container-PG-inicial' >

        <div className='texto-container' >
          <p >
            Automatize seus atendimentos com
            a plataforma líder em agendamentos de serviços online!
          </p>

          <p className='texto-interno'>
            Crie sua conta agora e teste grátis por 14 dias!
          </p>



          <img className='img-home' src="/img-home.svg" />

        </div>
      </div>

      <p className='texto-teste' > TESTE GRÁTIS </p>

      

      <div className='container-cadastro'>

      <h1 > Cadastre-se e receba nossas Atualizações diárias <img  style={{width:'25px', left:'2rem', margin:'-px' }} src='/refresh.svg' />  </h1>
      

        <div >

          <form>
            <input className='email-form' name='email' type='email' placeholder="Digite seu Email"
              style={{ backgroundColor: '9346F4' }} />
            <button onClick='/Cadastro' to='/Cadastro'> <Link to='/Cadastro' style={{ backgroundColor: '#9346F4', width:'20%',height:'1.9rem' , 
            color: '#F0F8FF', borderColor:'#9346F4' , borderRadius:'3px' }} > cadastro </Link> </button>
          </form>

         
        </div>
      </div>


    </div>




  )
};
export default Home;