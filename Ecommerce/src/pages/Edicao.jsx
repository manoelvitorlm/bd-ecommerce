import React from 'react';
import Header from '../componets/Header'
import NavBar from '../componets/NavBar';
import Footer from '../componets/Footer';
import { useState, useEffect } from 'react';
const axios = require('axios').default;

const Edicao = () => {

    const [produtos, setProdutos] = useState([]);
    const [isSelect, setIsSelect] = useState(false);
    const [cadastro, setCadastro] = useState(false);
    var atributosP;
    var id;

    const getProduto = async () => {
        try {
            const response = await fetch('http://localhost:3001',
                { method: 'GET', headers: { 'Content-Type': 'aplication/json' } });
            const data = await response.json();
            setProdutos(data);
        } catch (ex) {
            console.log(ex);
        }
    }

    const renderSeletor = (produtos) => {
        return (
            produtos.map(({ id_produto, nome_produto }) => {
                return <option value={id_produto}>{id_produto} - {nome_produto}</option>
            })
        )
    }

    const postarProduto = async () => {
        
        try {
            axios.put('http://localhost:3001/editar/' + id, atributosP)
        } catch (ex) {
            console.log(ex);
        }
    }

    const clicarEdicao = (e) => {
        e.preventDefault();
        let idSelecionado = document.getElementById("id").value;
        if (idSelecionado != false && idSelecionado != "Selecione o produto") {

            const nomeProduto = produtos.filter(p => (p.id_produto == idSelecionado))
            id = nomeProduto[0].id_produto
            document.getElementById("inputNome").value = nomeProduto[0].nome_produto
            document.getElementById("inputDetalhes").value = nomeProduto[0].detalhes
            document.getElementById("inputCategoriaP").value = nomeProduto[0].tipo_categoria
            document.getElementById("inputCategoriaS").value = nomeProduto[0].nome_categoria
            document.getElementById("inputPreco").value = nomeProduto[0].preco
            document.getElementById("inputEstoque").value = nomeProduto[0].quantidade
            document.getElementById("inputImagem").value = nomeProduto[0].link_img  
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
        console.log(atributosP)

        postarProduto();
    }

    useEffect(() => {
        getProduto()
    }, [])

    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <main>

                <form className="formulario container-md" onSubmit={handleCadastrar}>
                    <select id="id" class="form-select" aria-label="Default select example">
                        <option selected>Selecione o produto</option>
                        {renderSeletor(produtos)}
                    </select>

                    <button type="button" onClick={clicarEdicao} class="btn btn-primary margin-left">Editar</button>
                    <div className="col-md-6">
                        <label for="nome" className="form-label">Nome do produto</label>
                        <input type="text" className="form-control" contentEditable="true" id="inputNome"></input>
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

                </form>

            </main>
            <Footer></Footer>
        </div>
    )

}
export default Edicao;