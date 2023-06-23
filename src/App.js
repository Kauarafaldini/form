import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [cliente, setCliente] = useState({
    nome:'',
    sobrenome:'',
    usuario:'',
    email:'',
    fone:''
  });

  const vlInput = e => setCliente({...cliente, [e.target.name]: e.target.value});

  const [mensage, setMensage] = useState("");

  const enviarmsg = async (e) => {

    e.preventDefault();

    console.log(`Nome: ${cliente.name}`);
    console.log(`Nome: ${cliente.sobrenome}`);
    console.log(`Nome: ${cliente.usuario}`);
    console.log(`Nome: ${cliente.email}`);
    console.log(`Nome: ${cliente.fone}`);

    const Envdados = {
      'Envdados': {
        'Content-Type': 'application/json'
      }
    }

    await axios.post('http://localhost:3000/mensage', cliente, Envdados)
    .then((retorno) => {

      setMensage(retorno.data.mensage);

    }).catch((error) => {

      setMensage(error.retorno.data.mensage);;

    });
  }
  
  return (
    <div className="App">

      <form onSubmit={enviarmsg}>

        <h2>Cadastro de cliente</h2>

        {mensage ? <p>{mensage}</p> : ""}

        <label>Nome: </label>
        <br/>
        <input 
        type='text'
        name='nome'
        placeholder='NOME'
        required
        onChange={vlInput}
        /><br/>

        <label>Sobrenome: </label>
        <br/>
        <input 
        type='text'
        name='sobrenome'
        placeholder='SOBRENOME'
        required
        onChange={vlInput}
        /><br/>

        <label>Usuario: </label>
        <br/>
        <input 
        type='text'
        name='usuario'
        placeholder='NOME DE USUARIO'
        required
        onChange={vlInput}
        /><br/>

        <label>E-mail: </label>
        <br/>
        <input 
        type='email'
        name='email'
        placeholder='E-MAIL'
        required
        onChange={vlInput}
        /><br/>

        <label>Telefone: </label>
        <br/>
        <input
        type='text'
        name='fone'
        placeholder='TELEFONE OU CELULAR'
        required
        onChange={vlInput}
        /><br/>

        <button
        className='button_enviar'
        type='submit'>ENVIAR</button>

        <button
        className='button_limpar'
        type='reset'>LIMPAR</button>
      
      </form>

      <form>
        <h2>Buscar cliente</h2>

        <label>Nome: </label>
        <br/>
        <input 
        type='text'
        name='text'
        placeholder='NOME'
        required
        /><br/>

        <label>Sobrenome: </label>
        <br/>
        <input 
        type='text'
        name='text'
        placeholder='SOBRENOME'
        required
        /><br/>

        <label>Usuario: </label>
        <br/>
        <input 
        type='text'
        name='text'
        placeholder='NOME DE USUARIO'
        required
        /><br/>

        <label>E-mail: </label>
        <br/>
        <input 
        type='email'
        name='email'
        placeholder='E-MAIL'
        required
        /><br/>

        <label>Telefone: </label>
        <br/>
        <input
        type='text'
        name='fone'
        placeholder='TELEFONE OU CELULAR'
        required
        /><br/>

        <button
        className='button_enviar'
        type='submit'>BUSCAR</button>

        <button
        className='button_limpar'
        type='reset'>LIMPAR</button>
      </form>
    </div>
    
  );
}

export default App;