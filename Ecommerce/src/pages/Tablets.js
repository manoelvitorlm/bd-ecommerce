import Header from "../componets/Header";
import NavBar from "../componets/NavBar";
import Footer from "../componets/Footer";
import Produto from "../componets/Produto";
import BreadCrumb from "../componets/BreadCrumb";

function Tablets() {

  return (

    <div>

        <Header /> {/*chamada da function Header*/}

        <NavBar /> {/*chamada da function NavBar*/}

        <main>
        
            {/* Mais populares */}
            <section className="container produtos">

                <BreadCrumb categoria="Tablets"/>
                
                {/* Título */}
                <h1>Tablet</h1>

                {/* listagem de produtos */}
                <article className="row">
                  <a href="./produto-tablet" className="produtos-container col-md-3">
                    <Produto href="./produto-tablet" img="./assets/images/tablet.jpg" title="Tablet" 
                        preco="799,90" id="TABGENX"/></a>
                        
                </article>
                {/* fim listagem de produtos */}

            </section>

        </main>

        <Footer /> {/*chamada da function Footer*/}

    </div>    
  );
}

export default Tablets;
