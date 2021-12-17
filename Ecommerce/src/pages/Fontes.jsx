import Header from "../componets/Header";
import NavBar from "../componets/NavBar";
import Footer from "../componets/Footer";
import BreadCrumb from "../componets/BreadCrumb";
import Produto from "../componets/Produto";

function Fontes() {

  return (

    <div>

        <Header /> {/*chamada da function Header*/}

        <NavBar /> {/*chamada da function NavBar*/}

        <main>
        
            {/* Mais populares */}
            <section className="container produtos">

                <BreadCrumb categoria="Fontes"/>
                
                {/* Título */}
                <h1>Fonte</h1>

                {/* listagem de produtos */}
                <article className="row">

                  <a href="./produto-fonte" className="produtos-container col-md-3">
                    <Produto img="./assets/images/fonte.png" title="Fonte" 
                            preco="489,00" id="FONGENX"/></a>
                </article>
                {/* fim listagem de produtos */}

            </section>

        </main>

        <Footer /> {/*chamada da function Footer*/}

    </div>    
  );
}

export default Fontes;
