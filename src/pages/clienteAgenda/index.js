import React from "react";
import './index.css'
import NavBarCliente from "../../components/navBarCliente/navBarCliente";


function ClienteAgenda() {

  return (
    <div>
      <NavBarCliente />

      <form>
        <div className='container-Cliente-Agenda' >
          <h1 className='title-cliente-Agenda'>
            Inicio / Agenda
          </h1>
          <button className='buttom-adiciona-calendario' src='/icon-apagar.svg'  > + Adicionar</button>

          <img className='buttom-apagar-calendario' src='/icon-apagar.svg' onClick='apagar' ></img>
        </div>


        <div className=' container-add-agenda'>
          
          <a style={{ color: '#9346F4', fontSize: '20px', marginLeft:'8px' }}> Titulo : <input
            className='input-title'
            name='nome'
            type='text'
            // value={cadastro.nome}
            // onChange={handleInputChange}
            placeholder="Nome do serviço"
            />
          </a>

          <br/> 

          <h2 style={{ color: '#9346F4', fontSize: '18px', marginLeft:'20px' }} > Selecione o tipo de insumo que Deseja ! </h2>
          <select className="input-select"
            name='definicao'
          // value={cadastro.definicao}
          // onChange={handleInputChange}
          >
            <option selected> - Insumo - </option>
            <option value=""> 1 </option>
            <option value=""> 2 </option>
          </select >
          <br/>
          {/*  select Profissional  */}
          <h2 style={{ color: '#9346F4', fontSize: '18px', marginLeft:'20px' }} > Selecione o tipo de Profissional que Deseja ! </h2>
          <select className="input-select"
            name='definicao'
          // value={cadastro.definicao}
          // onChange={handleInputChange}
          >
            <option selected> - Selecione seu tipo de Profissional  </option>
            <option value=""> 1 </option>
            <option value=""> 2 </option>
          </select >

          <br /><br />
          <h2 style={{ color: '#9346F4', fontSize: '18px', marginLeft:'20px' }} > 
          Selecione dia e hora ! </h2>

          <input className='input-date' type="datetime-local" />
          <br />

          <br />

          <div className='box-comentario'>
            <h2  style={{ color: '#9346F4', fontSize: '18px', marginLeft:'23px' }} >Descricao do Servico:</h2>
            {/* <label className='title-msg' for="msg" >Mensagem:</label> */}
            <textarea className='input-comentario' id="msg" placeholder="Descricao do Servico:"></textarea>
          </div>

          

          {/* <input className='input-img' type="image" src='/add-img.png' /> */}

          <br />


        </div>

        

        <div className='box-direita-foto' > 
        <h2 className='title-foto'> + Add a foto ! </h2>
            <input className='input-img' type="image" src='/add-img.png' />
        </div>

      </form>
    </div>



  )

} export default ClienteAgenda;