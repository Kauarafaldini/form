import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">

      <h1>Cadastro de cliente</h1>

      <label>Nome: </label>
      <br/>
      <input 
      type='text'
      name='text'
      placeholder='NOME'
      required ="required"
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

      <input 
      className='button'
      type='submit' 
      value="ENVIAR"
      />

      <input 
      className='button'
      type='reset' 
      value="LIMPAR"
      />

      <h1>Buscar cliente</h1>

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

      <input 
      className='button'
      type='submit' 
      value="ENVIAR"
      />

      <input 
      className='button'
      type='reset' 
      value="LIMPAR"
      />

    </div>
  );
}

export default App;