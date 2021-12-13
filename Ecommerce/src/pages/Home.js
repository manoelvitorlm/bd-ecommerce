import Header from "../componets/Header";
import NavBar from "../componets/NavBar";
import Footer from "../componets/Footer";
import BreadCrumb from "../componets/BreadCrumb";
import Produto from "../componets/Produto";

function Home() {

  return (
    <div>
        <Header /> {/*chamada da function Header*/}

        <NavBar /> {/*chamada da function NavBar*/}

        <main>
            {/*Slider*/}
            <section id="banner-promo" className="container carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                <li data-target="#banner-promo" data-slide-to="0" className="active"></li>
                <li data-target="#banner-promo" data-slide-to="1"></li>
                <li data-target="#banner-promo" data-slide-to="2"></li>
                </ol>
                <article className="carousel-inner">
                <figure className="carousel-item active">
                    <img className="d-block w-100" src="./assets/images/banner-1.png" alt="First slide"></img>
                </figure>
                <figure className="carousel-item">
                    <img className="d-block w-100" src="./assets/images/banner-2.png" alt="Second slide"></img>
                </figure>
                <figure className="carousel-item">
                    <img className="d-block w-100" src="./assets/images/banner-3.png" alt="Third slide"></img>
                </figure>
                </article>
                <a className="carousel-control-prev" href="#banner-promo" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#banner-promo" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
                </a>
            </section>
            {/*fim slider*/}

            {/*segundo banner*/}
            <section className="container banners-promocionais-estatico">
                <section className="row">
                    <article className="col-md-6">
                        <div className="banners-promocionais-estatico-12x d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-credit-card-2-back" viewBox="0 0 16 16">
                                <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z"/>
                                <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z"/>
                            </svg>
                            <p>
                                Parcele em até<br/>
                                <strong>12x sem juros</strong>
                            </p>
                        </div>

                    </article>
                    <article className="col-md-6">
                        <div className="banners-promocionais-estatico-entrega d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-box-seam" viewBox="0 0 16 16">
                                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                            </svg>
                            <p>
                                Entrega para<br/>
                                <strong>todo o Brasil</strong>
                            </p>
                        </div>

                    </article>
                </section>
            </section>
            {/*fim segundo banner*/}

            {/*Mais populares*/}
            <section className="container produtos">
                {/*Titulo 1*/}
                <h1 className="text-center">Mais populares</h1>

                {/*Listagem dos produtos*/}
                <article className="row">

                    <a href="./produto-notebook" className="produtos-container col-md-3">
                        <Produto img="./assets/images/notebook.jpg" title="Notebook" 
                                preco="2499,00" id="NOTGENX"/></a>

                    <a href="./produto-computador" className="produtos-container col-md-3">
                        <Produto img="./assets/images/computador.jpg" title="Computador" 
                                preco="1899,90" id="COMGENX"/></a>

                    <a href="./produto-smartphone" className="produtos-container col-md-3">
                        <Produto href="./produto-smartphone" img="./assets/images/smartphone.jpg" title="Smartphone" 
                                preco="1499,00" id="SMAGENX"/></a>

                    <a href="./produto-tablet" className="produtos-container col-md-3">
                        <Produto href="./produto-tablet" img="./assets/images/tablet.jpg" title="Tablet" 
                                preco="799,90" id="TABGENX"/></a>

                </article>
                {/*fim listagem de produtos*/}

                {/* Botão de veja mais*/}
                <div className="row d-flex justify-content-center">
                    <a href="./veja-mais" className="btn btn-dark col-md-2">Veja mais</a>
                </div>
                {/* Fim Botão de veja mais*/}

            </section>

        </main>

        <Footer /> {/*chamada da function Footer*/}

    </div>
        
  );
}

export default Home;
