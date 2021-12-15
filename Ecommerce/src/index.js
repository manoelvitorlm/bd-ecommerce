import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import MainRouter from './MainRouter';
import App from './App';
// import database from "./database.js"

ReactDOM.render(
  <BrowserRouter>
        <MainRouter />
        <App></App>
  </BrowserRouter>, 
  document.getElementById('root')
);

// //Conexão com o banco de dados
// const Client = require('pg').Client
// const cliente = new Client({
//     user: "byteshop",
//     password: "byteshop",
//     host: "159.223.106.29",
//     port: 5432,
//     database: "database"
// })

// async function getDados() {
//   try {
//     console.log("Iniciando a conexão")
//     await cliente.connect()
//     console.log("Conexão bem sucedida")
    
//     const resultado = await cliente.query("select * from mercado.produto")
//     console.table(resultado.rows)
//   }

//   catch (ex) {
//     console.log("Ocorreu erro no getDados" + ex)
//   } 
  
//   finally {
//     await cliente.end()
//     console.log("Cliente desconectado")
//   }
// }