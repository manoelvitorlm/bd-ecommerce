import Header from "../componets/Header";
import NavBar from "../componets/NavBar";
import Footer from "../componets/Footer";
import Produto from "../componets/Produto";
import BreadCrumb from "../componets/BreadCrumb";

function Notebooks() {

  return (

    <div>

        <Header /> {/*chamada da function Header*/}

        <NavBar /> {/*chamada da function NavBar*/}

        <main>
            <section className="container produtos">

                <BreadCrumb categoria="Notebook"/>
                
                {/* Título */}
                <h1>Notebook</h1>

                {/* listagem de produtos */}
                <article className="row">
                  <a href="./produto-notebook" className="produtos-container col-md-3">
                    <Produto href="./produto-notebook" img="./assets/images/notebook.jpg" title="Notebook" 
                        preco="2499,00" id="NOTGENX"/></a>

                </article>
                {/* fim listagem de produtos */}   
            </section>
        </main>

        <Footer /> {/*chamada da function Footer*/}

    </div>    
  );
}

export default Notebooks;
