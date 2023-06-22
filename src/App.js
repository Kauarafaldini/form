import './App.css';
import React from 'react';

function App() {

  const
  
  return (
    <div className="App">

      <h2>Cadastro de cliente</h2>

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

      <button
      className='button_enviar'
      type='submit'>ENVIAR</button>

      <button
      className='button_limpar'
      type='reset'>LIMPAR</button>

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
      type='submit'>ENVIAR</button>

      <button
      className='button_limpar'
      type='reset'>LIMPAR</button>

    </div>
  );
}

export default App;