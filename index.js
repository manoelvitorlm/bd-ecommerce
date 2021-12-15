const express = require('express')
const app = express()
const port = 3001

const produtos = require('./database')

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', async (req, res) => {
  try{
    const dados = await produtos.getProduto();
    console.log(dados.rows);
    
    return res.json(dados.rows);
  }catch(ex){
    console.error(ex);
  }
})

// app.post('/produto', async (req, res) => {
//   try{
//     const {name, email} = req.body;
//     await produtos.createMerchant(name, email)
//   }catch(ex){
//     console.error(ex);
//   }
// })

// app.delete('/merchants/:id', async (req, res) => {
//   try{
//     await merchant_model.deleteMerchant(req.params.id)
//     return res.send('Ok!');
//   }catch(ex){
//     console.error(ex);
//   }
  
// })

// app.put('/merchants/:id', async (req, res) =>{
//   try{
//     const {name, email} = req.body;
//     await merchant_model.updateMerchant(req.params.id, name, email)
//     return res.send('Ok!');
//   }catch(ex){
//     console.error(ex);
//   }
// })

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

