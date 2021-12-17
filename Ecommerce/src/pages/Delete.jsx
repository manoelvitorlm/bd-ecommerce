import Header from "../componets/Header";
import React, { Fragment } from 'react';
import { useState } from "react";
import { useEffect } from "react";
import NavBar from "../componets/NavBar";
import Footer from "../componets/Footer";
import Produto from "../componets/Produto";
const axios = require('axios').default;
const url = 'http://localhost:3001';

const Delete = () => {

    const [produtos, setProdutos] = useState([]);

    const [isSelect, setIsSelect] = useState(false);

    const getProduto = async () => {
        try {
            const response = await fetch('http://localhost:3001',
                { method: 'GET', headers: {'Content-Type': 'aplication/json'} } );
            const data = await response.json();
            setProdutos(data);
        } catch (ex) {
            console.log(ex);
        }
    }
    const renderSeletor = (produtos) => {
        return (
            produtos.map(({ id_produto, nome_produto}) => { 
                return <option value={id_produto}>{id_produto} - {nome_produto}</option>
            })
        )
    }
    
    const clicarDelete = (e) => {
        e.preventDefault();
        let idSelecionado = document.getElementById("id").value;
        if(idSelecionado != false && idSelecionado != "Selecione o Id"){
            setIsSelect(true);
            deletarProduto(idSelecionado); 
        }
        window.location.reload(true);
    }

    const deletarProduto = (id) => {
        try {
            fetch('http://localhost:3001/deletar/' + id,
            { method: 'DELETE', headers: {'Content-Type': 'aplication/json'} } );
            
        } catch (ex) {
            console.log(ex);
        }
        
        
    }

    const renderProduto = (produtos) => {
        return (
            produtos.map(({ id_produto, nome_produto, preco, link_img}) => {
                return <Produto title={nome_produto} id={id_produto} preco={preco} 
                                img={link_img} isPagDrop={1} />
            })
        )
    }
      
    useEffect(() => {
        getProduto()   
    }, [])

    return (
        <div>
            <Header /> {/*chamada da function Header*/}
            <NavBar /> {/*chamada da function NavBar*/}
            <main>
                
                {/*Mais populares*/}
                <section className="container produtos">
                    <h1 className="text-center">Todos Produtos</h1>
                    {/*Listagem dos produtos*/}
                    <select id="id" class="form-select" aria-label="Default select example">
                        <option selected>Selecione o produto</option>
                        {renderSeletor(produtos)}
                    </select>

                    <button onClick={clicarDelete} type="button" class="btn btn-danger margin-left">Deletar</button>
                    
                    <article className="row">
                        {renderProduto(produtos)}
                    </article>
                    {/*fim listagem de produtos*/}
                </section>
            </main>
            <Footer /> {/*chamada da function Footer*/}
        </div>
    );
}

export default Delete;

