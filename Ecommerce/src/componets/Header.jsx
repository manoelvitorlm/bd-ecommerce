import React from 'react';


export default class Header extends React.Component {

    render() {
        return (
            <div>
                {/* header */}
                <header className="container-fluid">
                    <section className="container">
                        <article className="row d-flex align-items-center">
                            {/* Logo do site */}
                            <a href="./" className="col-md-2 d-flex justify-content-center">
                                <img src="./assets/images/logo-byteshop.png" alt="Logo da loja - Byte Shop"></img>
                            </a>

                            {/* Formulário de busca */}
                            <form action="#" className="col-md-6 d-flex align-items-center">
                                <input type="text" name="name" placeholder="Procurar eletrônicos"></input>
                                <button className="d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </button>
                            </form>

                            {/* Classe que reune os botões do header */}
                            <ul className="col-md-4 nav d-flex align-items-center justify-content-around">

                                {/* Botão de cadastro */}
                                <li className="nav-item">
                                    <span className="cadastro d-flex align-items-center justify-content-end"></span>
                                    <a href="/cadastrar">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFF" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                        </svg>
                                        Cadastrar
                                    </a>
                                </li>

                                {/* Botão de deletar*/}
                                <li className="entrar d-flex align-items-center justify-content-start">
                                    <a href="./deletar">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                    </svg>

                                        Deletar
                                    </a>
                                </li>


                                {/* Botão de editar */}
                                <li className="nav-item">
                                    <span className="notificacao d-flex align-items-center justify-content-center"></span>
                                    <a href="/editar">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg>
                                        Editar
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


