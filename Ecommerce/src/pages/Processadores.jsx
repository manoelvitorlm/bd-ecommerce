import Header from "../componets/Header";
import NavBar from "../componets/NavBar";
import Footer from "../componets/Footer";
import Produto from "../componets/Produto";
import BreadCrumb from "../componets/BreadCrumb";

function Processadores() {

  return (

    <div>

        <Header /> {/*chamada da function Header*/}

        <NavBar /> {/*chamada da function NavBar*/}

        <main>
        
            {/* Mais populares */}
            <section className="container produtos">

                <BreadCrumb categoria="Processador" />
                
                {/* Título */}
                <h1>Processador</h1>

                {/* listagem de produtos */}
                <article className="row">
                  <a href="./produto-processador" className="produtos-container col-md-3">
                    <Produto href="./produto-processador" img="./assets/images/processador.png" title="Processador" 
                        preco="1499,00" id="CPUGENX"/></a>
                        
                </article>
                {/* fim listagem de produtos */}

            </section>

        </main>
        
        <Footer /> {/*chamada da function Footer*/}

    </div>    
  );
}

export default Processadores;
