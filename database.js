const Pool = require('pg').Pool
const pool = new Pool({
  user: 'byteshop',
  host: '159.223.106.29',
  database: 'database',
  password: 'byteshop',
  port: 5432,
});    

const getProduto = () => pool.query('SELECT * FROM mercado.produto')

const cadastraProduto = (nome, especificacao, status_produto) => {
  pool.query("INSERT INTO mercado.produto (id, nome, especificacao, status_produto) VALUES (DEFAULT, $2, $3, $4) RETURNING *;", [nome, especificacao, status_produto]);
}

// TODO: Implementar o delete
// const deleteProduto = (id) => {
//     pool.query('DELETE FROM merchants WHERE ID = $1', [id])
// }

// TODO: Implementar o update
// const updateProduto = (id, name, email) => {
//   pool.query('UPDATE merchants SET name = $1, email = $2 WHERE id = $3 RETURNING *;',
//   [name,email,id],);
// }

module.exports = {
    getProduto,
    cadastraProduto,
    // deleteProduto,
    // updateProduto,
}