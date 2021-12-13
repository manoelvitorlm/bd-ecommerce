import React from 'react';


export default class Header extends React.Component {

    render(){
        return (
            <div>
                {/* header */}
                <header className="container-fluid">
                <section className="container">
                    <article className="row d-flex align-items-center">
                        <a href="./" className="col-md-2 d-flex justify-content-center">
                            <img src="./assets/images/logo-byteshop.png" alt="Logo da loja - Byte Shop"></img>
                        </a>
                        <form action="#" className="col-md-7 d-flex align-items-center">
                            <input type="text" name="name" placeholder="Procurar eletrônicos"></input>
                            <button className="d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                            </button>
                        </form>
            
                        <ul className="col-md-3 nav d-flex align-items-center justify-content-around">
                            <li className="nav-item">

                            
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFF" className="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    </svg> 

                                    Entrar
                                </a>
                            </li>

                    
                            <li className="nav-item">
                                <span className="notificacao d-flex align-items-center justify-content-center"></span>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFF" className="bi bi-cart-fill" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                    </svg>
                                    Carrinho
                                </a>
                            </li>
                        </ul>

                    </article>

                </section>
                </header>
                {/* header */}
            </div> 
        );
    }
}


