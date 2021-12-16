import Header from "../componets/Header";
import React, { Fragment } from 'react';
import NavBar from "../componets/NavBar";
import Footer from "../componets/Footer";
import Form_Qtd_Comprar from "../componets/Form_Qtd_Comprar";
import BreadCrumb from "../componets/BreadCrumb";


export default class Detalhes_Produto extends React.Component {

    constructor(props) {
        super(props);
    }
    render(){
        return (

            <div>

                <Header /> {/*chamada da function Header*/}

                <NavBar /> {/*chamada da function NavBar*/}

                <main>
                    {/* container produto */}
                    <section className="container produtos">

                        <BreadCrumb tipo_categoria={this.props.tipo_categoria}
                                    nome_categoria={this.props.nome_categoria} />

                        

                        <article className="row produtos-compra">
                            <figure className="col-md-7">
                                <img src={this.props.img} className="img-fluid"
                                    alt={this.props.title}></img>
                            </figure>
                            <section className="col-md-5 d-flex flex-column justify-content-around">
                                <article className="produtos-conteudo">
                                    <h1> <strong>{this.props.title}</strong></h1>
                                    <p>{this.props.detalhes}</p>
                                </article>
                                <article className="produtos-preco">
                                    <strong>R$ {this.props.preco}
                                        <span className="d-block">Em até 12x sem juros</span>
                                    </strong>

                                    <Form_Qtd_Comprar qtd_estoque={this.props.qtd_estoque} />

                                    <div className="produtos-id">
                                        id = {this.props.id}
                                    </div>


                                </article>
                            </section>
                            
                            {/* <div className="fb-comments col-md-12 mt-5 mb-5" data-href="http://localhost:3000/5"
                                data-width="100%" data-numposts="5"></div>

                            <div className="fb-share-button" data-href="http://localhost:3000/5"
                                data-layout="button" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F127.0.0.1%3A5500%2FEcommerce%2Fproduto-computador%23&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Compartilhar</a></div> */}

                        </article>
                    </section>
                    {/* container produto */}

                </main>

                <Footer /> {/*chamada da function Footer*/}

            </div>
        );
    }
}

