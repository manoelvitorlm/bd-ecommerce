import React, {useState, useEffect} from 'react';
import { BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import MainRouter from './MainRouter';
const axios = require('axios').default;
const url = 'http://localhost:3001';

function App() {
  const [produtos, setMerchants] = useState(false);
  useEffect(() => {
    getProduto();
  }, []);
  
  function getProduto() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setMerchants(data);
      });
  }

  // function cadastrarProduto() {
  //   let name = prompt('Enter merchant name');
  //   let email = prompt('Enter merchant email');
  //   axios.post( url + '/merchants', {name,email} );
  //   window.location.reload();
  // }
  
  // function deleteMerchant() {
  //   let id = prompt("Digite o id para deletar");
  //   axios.delete( url + `/merchants/${id}`);
  //   window.location.reload();
  // }
  
  // function updateMerchant() {
  //   let name = prompt('Enter merchant name');
  //   let email = prompt('Enter merchant email');
  //   let id = prompt('Enter merchant id');
  //   axios.put( url + `/merchants/${id}`, {name,email});
  //   window.location.reload();
  // }

  return (
    <div>
      {produtos ? produtos : 'Não tem produtos disponíveis'}
      <br />
      {/* <button onClick={createMerchant}>Add merchant</button>
      <br />
      <button onClick={deleteMerchant}>Delete merchant</button>
      <br />
      <button onClick={updateMerchant}>Update merchant</button> */}
    </div>
  );
}
export default App;