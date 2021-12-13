import Header from "../componets/Header";
import NavBar from "../componets/NavBar";
import Footer from "../componets/Footer";
import BreadCrumb from "../componets/BreadCrumb";
import Produto from "../componets/Produto";


function Computadores() {

  return (

    <div>

        <Header /> {/*chamada da function Header*/}

        <NavBar /> {/*chamada da function NavBar*/}

        <main>
            {/*Computadores*/}
            <section className="container produtos">

                <BreadCrumb categoria="Computadores"/>

                {/* Título */}
                <h1>Computadores</h1>

                {/* listagem de produtos */}
                <article className="row">

                <a href="./produto-computador" className="produtos-container col-md-3">
                    <Produto img="./assets/images/computador.jpg" title="Computador" 
                        preco="1899,90" id="PCGENX"/></a>
                    
                </article>
                {/* fim listagem de produtos */}

            </section>

        </main>

        <Footer /> {/*chamada da function Footer*/}

    </div>    
  );
}

export default Computadores;
