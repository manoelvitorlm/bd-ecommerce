const express = require('express')
const app = express()
const port = 3001

const produtos = require('./database')

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', async (req, res) => {
  try{
    const dados = await produtos.getProdutos();
    //console.log(dados.rows);
    return res.json(dados.rows);
  }catch(ex){
    console.error(ex);
  }
})

app.get('/:id', async (req, res) => {
  try{
    const dados = await produtos.getUmProduto(req.params.id)
    //return res.send(dados.rows)
    return res.json(dados.rows);
  }catch(ex){
    console.error(ex);
  }
})

app.post('/cadastrar', async (req, res) => {
  try{
    const {nome_produto,detalhes,tipo_categoria,nome_categoria,
          preco,quantidade,link_img} = req.body;
    console.log(nome_produto,detalhes,tipo_categoria,nome_categoria,
      preco,quantidade,link_img);
    
    await produtos.cadastraProduto(nome_produto,detalhes,tipo_categoria,nome_categoria,preco,quantidade,link_img)
    
    return res.send('Ok!');
  }catch(ex){
    console.error(ex);
  }
})

app.delete('/deletar/:id', async (req, res) => {
  try{
    await produtos.deleteProduto(req.params.id)
    return res.send('Ok!');
  }catch(ex){
    console.error(ex);
  }
})

app.put('/editar/:id', async (req, res) =>{
  try{
    const {nome_produto,detalhes,tipo_categoria,nome_categoria,
      preco,quantidade,link_img} = req.body;
      await produtos.editarProduto(req.params.id)
      return res.send('Ok!');
  }catch(ex){
    console.error(ex);
  }
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

