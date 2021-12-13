import Header from "../componets/Header";
import NavBar from "../componets/NavBar";
import Footer from "../componets/Footer";
import Form_Qtd_Comprar from "../componets/Form_Qtd_Comprar";
import BreadCrumb from "../componets/BreadCrumb";

function Produto_Headset() {

    var title = "Headset";
    var id = "HEAGENX";
    var preco = "249,00";
    var img = "./assets/images/headset-comprar.jpg";
    var descricao = "Descrição do produto";
    var qtd_estoque = "889"  

    return (

        <div>

            <Header /> {/*chamada da function Header*/}

            <NavBar /> {/*chamada da function NavBar*/}

            <main>
                {/* container produto */}
                <section className="container produtos">

                    <BreadCrumb categoria="Headsets" />
                    <article className="row produtos-compra">
                        <figure className="col-md-7">
                            <img src={img} className="img-fluid"
                                alt={title}></img>
                        </figure>
                        <section className="col-md-5 d-flex flex-column justify-content-around">
                            <article className="produtos-conteudo">
                                <h1> <strong>{title}</strong></h1>
                                <p>{descricao}</p>
                            </article>
                            <article className="produtos-preco">
                                <strong>R$ {preco}
                                    <span className="d-block">Em até 12x sem juros</span>
                                </strong>

                                <Form_Qtd_Comprar qtd_estoque={qtd_estoque} />

                                <div className="produtos-id">
                                    id = {id}
                                </div>


                            </article>
                        </section>

                        <div className="fb-comments col-md-12 mt-5 mb-5" data-href="http://127.0.0.1:5500/Ecommerce/produto-computador?#" 
                            data-width="100%" data-numposts="5"></div>

                        <div className="fb-share-button" data-href="http://127.0.0.1:5500/Ecommerce/produto-computador?#" 
                            data-layout="button" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F127.0.0.1%3A5500%2FEcommerce%2Fproduto-computador%23&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Compartilhar</a></div>

                    </article>
                </section>
                {/* container produto */}

            </main>

            <Footer /> {/*chamada da function Footer*/}

        </div>    
    );
}

export default Produto_Headset;
