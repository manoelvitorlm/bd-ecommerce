import Header from "../componets/Header";
import NavBar from "../componets/NavBar";
import Footer from "../componets/Footer";
import BreadCrumb from "../componets/BreadCrumb";
import Produto from "../componets/Produto";

function Memorias_Ram() {

  return (

    <div>

        <Header /> {/*chamada da function Header*/}

        <NavBar /> {/*chamada da function NavBar*/}

        <main>
        
          {/* Mais populares */}
          <section className="container produtos">

              <BreadCrumb categoria="Memória Ram"/>
              
              {/* Título */}
              <h1>Memória Ram</h1>

              {/* listagem de produtos */}
              <article className="row">
                <a href="./produto-memoria-ram" className="produtos-container col-md-3">
                    <Produto href="./produto-memoria-ram" img="./assets/images/memoria-ram.png" title="Memória Ram" 
                              preco="249,00" id="RAMGENX"/></a>
              </article>
              {/* fim listagem de produtos */}

          </section>

        </main>

        <Footer /> {/*chamada da function Footer*/}

    </div>    
  );
}

export default Memorias_Ram;
