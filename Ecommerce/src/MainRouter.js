import { Switch, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Computadores from "./pages/Computadores"
import Fontes from "./pages/Fontes"
import Memorias_Ram from "./pages/Memorias_Ram"
import Notebooks from "./pages/Notebooks"
import Placas_de_video from "./pages/Placas_de_video"
import Processadores from "./pages/Processadores"
import Smartphones from './pages/Smartphones';
import Tablets from './pages/Tablets';
import Produto_Computador from './pages/Produto_Computador';
import Produto_Fonte from './pages/Produto_Fonte';
import Produto_Headset from './pages/Produto_Headset';
import Produto_Memoria_Ram from './pages/Produto_Memoria_Ram';
import Produto_Mouse_Gamer from './pages/Produto_Mouse_Gamer';
import Produto_Notebook from './pages/Produto_Notebook';
import Produto_Pc_Gamer from './pages/Produto_Pc_Gamer';
import Produto_Placa_de_Video from './pages/Produto_Placa_de_Video';
import Produto_Processador from './pages/Produto_Processador';
import Produto_Smartphone from './pages/Produto_Smartphone';
import Produto_Tablet from './pages/Produto_Tablet';
import Produto_Teclado_Gamer from './pages/Produto_Teclado_Gamer';
import Cadastro from './pages/Cadastro';

function MainRouter() {
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
                <Route path="/produto-computador" component={Produto_Computador} />
                <Route path="/produto-fonte" component={Produto_Fonte} />
                <Route path="/produto-headset" component={Produto_Headset} />
                <Route path="/produto-memoria-ram" component={Produto_Memoria_Ram} />
                <Route path="/produto-mouse-gamer" component={Produto_Mouse_Gamer} />
                <Route path="/produto-notebook" component={Produto_Notebook} />
                <Route path="/produto-pc-gamer" component={Produto_Pc_Gamer} />
                <Route path="/produto-placa-de-video" component={Produto_Placa_de_Video} />
                <Route path="/produto-processador" component={Produto_Processador} />
                <Route path="/produto-smartphone" component={Produto_Smartphone} />
                <Route path="/produto-tablet" component={Produto_Tablet} />
                <Route path="/produto-teclado-gamer" component={Produto_Teclado_Gamer} />
            </Switch>
        </main>
    );
}

export default MainRouter;
