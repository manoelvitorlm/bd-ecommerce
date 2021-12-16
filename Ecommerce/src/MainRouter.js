import { Switch, Route } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import Home from "./pages/Home"
import Computadores from "./pages/Computadores"
import Fontes from "./pages/Fontes"
import Memorias_Ram from "./pages/Memorias_Ram"
import Notebooks from "./pages/Notebooks"
import Placas_de_video from "./pages/Placas_de_video"
import Processadores from "./pages/Processadores"
import Smartphones from './pages/Smartphones';
import Tablets from './pages/Tablets';
import Cadastro from './pages/Cadastro';
import Detalhes_Produto from './pages/Detalhes_Produto';


function MainRouter() {
    
    const [produtos, setProdutos] = useState([]);
    
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
    
    const renderProduto = (produtos) => {
        return (
            produtos.map(({ id_produto, nome_produto, detalhes, preco, quantidade, link_img, tipo_categoria, nome_categoria}) => {
                return <Route path={'/'+id_produto} render={(props) => <Detalhes_Produto {...props} 
                        title={nome_produto} id={id_produto} preco={preco} detalhes={detalhes}
                        qtd_estoque={quantidade} img={link_img} tipo_categoria={tipo_categoria} 
                        nome_categoria={nome_categoria} /> }/>

            })
        )
    }

      
    useEffect(() => {
        getProduto()
    }, [])
    

    return (
        <main>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/computadores" component={Computadores} />
                <Route path="/fontes" component={Fontes} />
                <Route path="/memorias-ram" component={Memorias_Ram} />
                <Route path="/notebooks" component={Notebooks} />
                <Route path="/placas-de-video" component={Placas_de_video} />
                <Route path="/processadores" component={Processadores} />
                <Route path="/smartphones" component={Smartphones} />
                <Route path="/tablets" component={Tablets} />
                {renderProduto(produtos)}

            </Switch>
        </main>
    );
}

export default MainRouter;
