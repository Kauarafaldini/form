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

  const [mensage, setMensage] = useState("");

  const vlInput = e => setCliente({...cliente, [e.target.name]: e.target.value});

  const enviarmsg = async (e) => {

    e.preventDefault();

    const headers = {
        'Content-Type': 'application/json'
    };

    try {
    const retorno = await axios.post('http://localhost:8080/clientes', cliente, {headers} );

      setMensage(retorno.data.mensage);

      setCliente({
        nome:'',
        sobrenome:'',
        usuario:'',
        email:'',
        fone:''
      })
    } catch (error) {
      if (error.response && error.response.data && error.response.data.mensage) {
        setMensage(error.response.data.mensage);
      } else {
        setMensage("Error: Cadastro não efetuado. Por favor, tente novamente.");
      }
    }
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
        value={cliente.nome}
        /><br/>

        <label>Sobrenome: </label>
        <br/>
        <input 
        type='text'
        name='sobrenome'
        placeholder='SOBRENOME'
        required
        onChange={vlInput}
        value={cliente.sobrenome}
        /><br/>

        <label>Usuario: </label>
        <br/>
        <input 
        type='text'
        name='usuario'
        placeholder='NOME DE USUARIO'
        required
        onChange={vlInput}
        value={cliente.usuario}
        /><br/>

        <label>E-mail: </label>
        <br/>
        <input 
        type='email'
        name='email'
        placeholder='E-MAIL'
        required
        onChange={vlInput}
        value={cliente.email}
        /><br/>

        <label>Telefone: </label>
        <br/>
        <input
        type='text'
        name='fone'
        placeholder='TELEFONE OU CELULAR'
        required
        onChange={vlInput}
        value={cliente.fone}
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