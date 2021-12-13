import Header from "../componets/Header";
import NavBar from "../componets/NavBar";
import Footer from "../componets/Footer";
import Produto from "../componets/Produto";
import BreadCrumb from "../componets/BreadCrumb";

function Smartphones() {

  return (

    <div>

        <Header /> {/*chamada da function Header*/}

        <NavBar /> {/*chamada da function NavBar*/}

        <main>
            {/* Mais populares */}
            <section className="container produtos">

                <BreadCrumb categoria="Smartphones"/>

                {/* Título */}
                <h1>Smartphones</h1>

                {/* listagem de produtos */}
                <article className="row">

                  <a href="./produto-smartphone" className="produtos-container col-md-3">
                    <Produto img="./assets/images/smartphone.jpg" title="Smartphone" 
                        preco="1499,00" id="SMAGENX"/></a>
                    
                </article>
                {/* fim listagem de produtos */}

            </section>

        </main>
        
        <Footer /> {/*chamada da function Footer*/}

    </div>    
  );
}

export default Smartphones;
