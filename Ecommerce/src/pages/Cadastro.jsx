import React from 'react';
import Header from '../componets/Header'
import NavBar from '../componets/NavBar';
import Footer from '../componets/Footer';
import {useState} from 'react';   
const axios = require('axios').default;

const Cadastro = () => {

    const [cadastro, setCadastro] = useState(false);
    const [categoria, setSelect] = useState(false);
    const [novaCategoeria, setCategoria] = useState(false);
    var atributosP;

    const handleSelect = event => {
        event.preventDefault();
        setSelect(true)
    }

    const handleCategoria = event => {
        event.preventDefault();
        setCategoria(true)

        setTimeout(() => {
            setCategoria(false)
        }, 3000)
    }

    const postarProduto = async () => {
        
        try {
            axios.post('http://localhost:3001/cadastrar',atributosP)
        } catch (ex) {
            console.log(ex);
        }
    }

    const handleCadastrar = event => {
        event.preventDefault();
        setCadastro(true)
        
        const nome_produto = document.getElementById("inputNome").value;
        const detalhes = document.getElementById("inputDetalhes").value;
        const tipo_categoria = document.getElementById("inputCategoriaP").value;
        let nome_categoria;
        if(document.getElementById("inputCategoriaS").value === "Adicionar categoria"){
            nome_categoria = document.getElementById("inputNomeCategoria").value;
            
        }else if(document.getElementById("inputCategoriaS").value != "Adicionar Categoria"){
            nome_categoria = document.getElementById("inputCategoriaS").value;
        }
        const quantidade = document.getElementById("inputEstoque").value;
        const link_img = document.getElementById("inputImagem").value;
        const preco = document.getElementById("inputPreco").value;

        atributosP = {
            nome_produto: nome_produto,
            detalhes: detalhes,
            tipo_categoria: tipo_categoria,
            nome_categoria: nome_categoria,
            preco: preco,
            quantidade: quantidade,
            link_img: link_img
        };

        
        postarProduto();
        // console.log(nome_produto)
        // console.log(detalhes)
        // console.log(tipo_categoria)
        // console.log(nome_categoria)
        // console.log(preco)
        // console.log(quantidade)
        // console.log(link_img)

    }

    window.onload = function () {

        const selectElement = document.querySelector(".select-categorias")

        selectElement.addEventListener('change', (event) => {
            if (event.target.value === "Adicionar categoria") {
                handleSelect(event)

            }
        })
    }

    return (
        <div>
            <Header />
            <NavBar />

            <main>
                <form className="formulario container-md" onSubmit={handleCadastrar}>
                    <div className="col-md-6">
                        <label for="nome" className="form-label">Nome do produto</label>
                        <input type="text" className="form-control" id="inputNome"></input>
                    </div>

                    <div className="form-group col-md-6">
                        <label for="detalhes" className="form-label">Detalhes do produto</label>
                        <textarea className="form-control" id="inputDetalhes"></textarea>
                    </div>

                    <div className="categorias col-md-8 d-flex">
                        <div className='categoria-principal col-md-4'>
                            <label for="inputState" className="form-label">Categoria principal</label>
                            <select id="inputCategoriaP" className="form-select">
                                <option selected>Tipo</option>
                                <option>Hardware</option>
                                <option>Eletrônicos</option>
                            </select>
                        </div>

                        <div className='categoria-secundaria col-md-4'>
                            <label for="inputState" className="form-label">Categoria secundária</label>
                            <select id="inputCategoriaS" className="select-categorias">
                                <option selected>Tipo</option>
                                <option className='nova-categoria'>Adicionar categoria</option>
                                <option>Smartphone</option>
                                <option>Processador</option>
                                <option>Memória RAM</option>
                                <option>Placa de vídeo</option>
                                <option>Fonte</option>
                                <option>Computador</option>
                                <option>Tablet</option>
                                <option>Notebook</option>
                            </select>
                        </div>
                    </div>

                    {categoria &&
                        <div className="col-md-6 cadastro-categoria" onClick={handleCategoria}>
                            <div>
                                <label for="nome-categoria" className="form-label">Nome da categoria</label>
                                <input type="text" className="form-control" id="inputNomeCategoria"></input>
                            </div>
                            
                            {novaCategoeria && <div>teste</div>}
                        </div>

                    }

                    <div className='col-md-8 d-flex'>
                        <div className="col-md-4">
                            <label for="preco" className="form-label">Preço</label>
                            <input type="text" className="form-control" id="inputPreco" placeholder="R$"></input>
                        </div>

                        <div className="col-md-4">
                            <label for="estoque" className="form-label">Quantidade</label>
                            <input type="text" className="form-control" id="inputEstoque"></input>
                        </div>
                    </div>


                    <div className="col-md-6">
                        <label for="link-imagem" className="form-label">Link da imagem</label>
                        <input type="url" className="form-control" id="inputImagem"></input>
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Cadastrar</button>
                    </div>

                    {cadastro && <div>Enviando submissão</div>}
                </form>
            </main>
            <Footer />
        </div>
    );
}

export default Cadastro