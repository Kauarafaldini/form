import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">

      <h1>Formulario de Feedback</h1>

      <input 
      type='text'
      placeholder='FIRTS NAME'
      />

      <input 
      type='text'
      placeholder='lAST NAME'
      />

      <input 
      type='text'
      placeholder='USERNAME'
      />  

      <input 
      type='text'
      placeholder='EMAIL'
      />

      <input
      type='text'
      placeholder='PHONE NUMBER'
      />

      <input 
      className='button'
      type='button' 
      value="SEND"
      onClick={0}
      />

      <h1>Formulario de Busca</h1>

      <input 
      type='text'
      placeholder='FIRTS NAME'
      />

      <input 
      type='text'
      placeholder='lAST NAME'
      />

      <input 
      type='text'
      placeholder='USERNAME'
      />  

      <input 
      type='text'
      placeholder='EMAIL'
      />

      <input
      type='text'
      placeholder='PHONE NUMBER'
      />

      <input 
      className='button'
      type='button' 
      value="SEARCH"
      onClick={0}
      />

    </div>
  );
}

export default App;