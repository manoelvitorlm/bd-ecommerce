import Header from "../componets/Header";
import NavBar from "../componets/NavBar";
import Footer from "../componets/Footer";
import Produto from "../componets/Produto";
import BreadCrumb from "../componets/BreadCrumb";


function VejaMais() {

  return (
    <div>
        <Header /> {/*chamada da function Header*/}

        <NavBar /> {/*chamada da function NavBar*/}

        <main>
        
            {/*Mais populares*/}
            <section className="container produtos">
                
                <BreadCrumb categoria="Mais populares"/>

                {/* Título */}
                <h1>Mais populares</h1>

                {/* listagem de produtos */}
                <article className="row">
                    <a href="./produto-notebook" className="produtos-container col-md-3">
                        <Produto img="./assets/images/notebook.jpg" title="Notebook" 
                            preco="2499,00" id="NOTGENX"/></a>

                    <a href="./produto-computador" className="produtos-container col-md-3">
                    <Produto img="./assets/images/computador.jpg" title="Computador" 
                            preco="1899,90" id="COMGENX"/></a>

                    <a href="./produto-smartphone" className="produtos-container col-md-3">
                    <Produto img="./assets/images/smartphone.jpg" title="Smartphone" 
                            preco="1499,00" id="SMAGENX"/></a>

                    <a href="./produto-tablet" className="produtos-container col-md-3">
                        <Produto img="./assets/images/tablet.jpg" title="Tablet" 
                            preco="799,90" id="TABGENX"/></a>

                    <a href="./produto-headset" className="produtos-container col-md-3">
                        <Produto img="./assets/images/headset.jpg" title="Headset" 
                            preco="269,00" id="HEAGENX"/></a>

                    <a href="./produto-teclado-gamer" className="produtos-container col-md-3">
                        <Produto img="./assets/images/teclado-gamer.jpg" title="Teclado Gamer" 
                            preco="329,00" id="TECGENX"/></a>

                    <a href="./produto-mouse-gamer" className="produtos-container col-md-3">
                        <Produto img="./assets/images/mouse-gamer.jpg" title="Mouse Gamer" 
                            preco="279,00" id="MOGGENX"/></a>

                    <a href="./produto-pc-gamer" className="produtos-container col-md-3">
                        <Produto img="./assets/images/pc-gamer.jpg" title="Pc Gamer" 
                            preco="5499,00" id="PCGGENX"/></a>

                    <a href="./produto-fonte" className="produtos-container col-md-3">
                        <Produto img="./assets/images/fonte.png" title="Fonte" 
                            preco="489,00" id="FONGENX"/></a>

                    <a href="./produto-processador" className="produtos-container col-md-3">
                        <Produto img="./assets/images/processador.png" title="Processador" 
                            preco="1499,00" id="PROGENX"/></a>

                    <a href="./produto-memoria-ram" className="produtos-container col-md-3">
                        <Produto img="./assets/images/memoria-ram.png" title="Memória Ram" 
                            preco="249,00" id="RAMGENX"/></a>

                    <a href="./produto-placa-de-video" className="produtos-container col-md-3">
                        <Produto img="./assets/images/placa-de-video.png" title="Placa de vídeo" 
                            preco="4299,00" id="GPUGENX"/></a>

                </article>
                {/* fim listagem de produtos */}

            </section>

        </main>

        <Footer /> {/*chamada da function Footer*/}

    </div>
        
  );
}

export default VejaMais;
