import './App.css';
import React, { useState } from 'react';
import axios from 'axios'; 

function App() {

  const [cadastrar,setCadastrar] = useState(false)

  const [buscar,setBuscar] = useState(false)

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
  };

  const [clientesEncontrados, setclientesEncontrados] = useState([]);

  const [clienteBusca, setClienteBusca] = useState ({
    nome: '',
    email: ''
  });

  const buscarCliente = async (e) => {
    e.preventDefault();

    const { nome, email } = clienteBusca;

    const search = new URLSearchParams({
      nome,
      email
    });

    try{
      const response = await axios.get(`http://localhost:8080/clientes?${search}`);

      const clientesEncontrados = response.data.dados;

      setclientesEncontrados(clientesEncontrados);

    } catch (error) {
      console.log(error);
      }
  };

  return (
    <div className="App">
      <div className='caixa_botao'>
          <h3 className='apresentacao'>O que deseja fazer?</h3>
        
        <button onClick={() => setCadastrar(!cadastrar)}>Cadastrar</button>
        <button onClick={() => setBuscar(!buscar)}>Buscar</button>
      </div>

      {cadastrar?
      <form onSubmit={enviarmsg}>

        <h2 className='apresentacao'>Cadastro de cliente</h2>

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
      :null}


      {buscar?
      <form onSubmit={buscarCliente}>
        <h2 className='apresentacao'>Buscar cliente</h2>

        <label>Nome: </label>
        <br/>
        <input 
        type='text'
        name='nome'
        placeholder='NOME'
        required
        onChange={(e) => setClienteBusca({ ...clienteBusca, nome: e.target.value})}
        value={clienteBusca.nome}
        /><br/>

        <label>E-mail: </label>
        <br/>
        <input 
        type='email'
        name='email'
        placeholder='E-MAIL'
        required
        onChange={(e) => setClienteBusca({ ...clienteBusca, email: e.target.value})}
        value={clienteBusca.email}
        /><br/>

        <button
        className='button_buscar'
        type='submit'>BUSCAR</button>

        <button
        className='button_limpar'
        type='reset'>LIMPAR</button>
      
        {clientesEncontrados.length > 0 && (
          <div className='ifBusca'>
            <h3>Resultados da busca:</h3>
            <ul>
              <div className='retorno'>
                {clientesEncontrados.map((cliente) => (
                  <li key={cliente.id}>
                    Nome: {cliente.nome}<br/>
                    Sobrenome: {cliente.sobrenome}<br/>
                    Usuario: {cliente.usuario}<br/>
                    Email: {cliente.email}<br/>
                    Telefone: {cliente.fone}<br/>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        )}
      </form>
      :null}
    </div>
  );
}

export default App;