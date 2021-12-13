import { Routes, Route } from 'react-router-dom';
import VejaMais from "./pages/VejaMais";
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


function MainRouter() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home/>} exact />
                <Route path="/veja-mais" element={<VejaMais/>} />
                <Route path="/computadores" element={<Computadores/>} />
                <Route path="/fontes" element={<Fontes/>} />
                <Route path="/memorias-ram" element={<Memorias_Ram/>} />
                <Route path="/notebooks" element={<Notebooks/>} />
                <Route path="/placas-de-video" element={<Placas_de_video/>} />
                <Route path="/processadores" element={<Processadores/>} />
                <Route path="/smartphones" element={<Smartphones/>} />
                <Route path="/tablets" element={<Tablets/>} />
                <Route path="/produto-computador" element={<Produto_Computador/>} />
                <Route path="/produto-fonte" element={<Produto_Fonte/>} />
                <Route path="/produto-headset" element={<Produto_Headset/>} />
                <Route path="/produto-memoria-ram" element={<Produto_Memoria_Ram/>} />
                <Route path="/produto-mouse-gamer" element={<Produto_Mouse_Gamer/>} />
                <Route path="/produto-notebook" element={<Produto_Notebook/>} />
                <Route path="/produto-pc-gamer" element={<Produto_Pc_Gamer/>} />
                <Route path="/produto-placa-de-video" element={<Produto_Placa_de_Video/>} />
                <Route path="/produto-processador" element={<Produto_Processador/>} />
                <Route path="/produto-smartphone" element={<Produto_Smartphone/>} />
                <Route path="/produto-tablet" element={<Produto_Tablet/>} />
                <Route path="/produto-teclado-gamer" element={<Produto_Teclado_Gamer/>} />
            </Routes>
        </main>
    );
}

export default MainRouter;
