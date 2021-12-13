import Header from "../componets/Header";
import NavBar from "../componets/NavBar";
import Footer from "../componets/Footer";
import Produto from "../componets/Produto";
import BreadCrumb from "../componets/BreadCrumb";

function Placas_de_video() {

  return (

    <div>

        <Header /> {/*chamada da function Header*/}

        <NavBar /> {/*chamada da function NavBar*/}

        <main>
        
            {/* Mais populares */}
            <section className="container produtos">

                <BreadCrumb categoria="Placas de vídeo"/>
                
                {/* Título */}
                <h1>Placa de vídeo</h1>

                {/* listagem de produtos */}
                <article className="row">
                  <a href="./produto-placa-de-video" className="produtos-container col-md-3">
                    <Produto href="./produto-placa-de-video" img="./assets/images/placa-de-video.png" title="Placa de vídeo" 
                        preco="4299,00" id="GPUGENX"/></a>
                        
                </article>
                {/* fim listagem de produtos */}

            </section>

        </main>

        <Footer /> {/*chamada da function Footer*/}

    </div>    
  );
}

export default Placas_de_video;
