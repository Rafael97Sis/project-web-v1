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
          Se você é um profissional cadastre-se agora mesmo e teste grátis por 14 dias.
          </p>



          <img className='img-home' src="/Imagem_Banner_1.svg" />

        </div>
        <p className='texto-teste' > TESTE GRÁTIS </p>
        
      </div>
  
      

      

      <div className='container-cadastro'>

      <h2 > Cadastre-se e receba nossas Atualizações diárias 
        <img className='img-atualiza' style={{ margin:'1%' , width:'23px', left:'76%', right:'15px' , position:'absolute'}} src='/refresh.svg' /> 
      </h2>
      

        <div >

          <form>
            <input className='email-form' name='email' type='email' placeholder="Digite-seu e-mail"
             />
            <a onClick='/Cadastro' to='/Cadastro'> <Link to='/Cadastro'
             style={{ backgroundColor: '#B6EC5E',
                      // width:'2px',
                      // height:'' , 
                      padding:'4px',
                      margin:'3px',
                      // color: '#F0F8FF',
                      color:'#9346F4',
                      fontSize:'18px',
                      fontFamily:'roboto',
                      // border:'2px solid black',
                      borderRadius:'5px' }} > Inscrever-se </Link> </a>
          </form>         
        </div>
      </div>
       {/* <div className='roda-pe'></div> */}
    </div>

  )
};
export default Home;