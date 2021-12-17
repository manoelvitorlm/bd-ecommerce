const Pool = require('pg').Pool
const pool = new Pool({
  user: 'byteshop',
  host: '159.223.106.29',
  database: 'database',
  password: 'byteshop',
  port: 5432,
});    

const getProdutos = () => pool.query('SELECT * FROM application.produto ORDER BY id_produto')

const getUmProduto = (id) => pool.query('SELECT * FROM application.produto WHERE id_produto = $1', [id])

const cadastraProduto = (nome_produto,detalhes, tipo_categoria,nome_categoria,
                          preco,quantidade,link_img) => {
                            
  pool.query("INSERT INTO application.produto (id_produto,nome_produto,detalhes,tipo_categoria,nome_categoria,preco,quantidade,link_img) "+  
              "VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7)", [nome_produto,detalhes,tipo_categoria,nome_categoria,preco,quantidade,[link_img]]);
}


const deleteProduto = (id) => {
    pool.query('DELETE FROM application.produto WHERE id_produto = $1', [id])
}

// TODO: Implementar o update
// const updateProduto = (id, name, email) => {
//   pool.query('UPDATE application.produto SET name = $1, email = $2 WHERE id = $3 RETURNING *;',
//   [name,email,id],);
// }

module.exports = {
    getProdutos,
    getUmProduto,
    cadastraProduto,
    deleteProduto,
    // updateProduto,
}