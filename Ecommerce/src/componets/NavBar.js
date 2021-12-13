import React from 'react';


export default class NavBar extends React.Component {
  
  render(){


    return (
        <div>
            {/*menu de navegação dos produtos*/} 
                <nav className="container-fluid nav-produtos">
                    <section className="container">
                        <ul className="nav">
                            {/*menu hardware*/}
                            <li className="col-md-2 nav-item d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFF" className="bi bi-list" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                                Hardware
                                {/*sub menu de hardware*/}
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a href="./processadores">Processador</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./placas-de-video">Placa de vídeo</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./memorias-ram">Memória Ram</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./fontes">Fonte</a>
                                    </li>
                                </ul>
                                {/*fim do sub menu de hardware*/}
                            </li>
                            {/*fim do menu hardware*/}

                            {/*menu eletrônicos*/}
                            <li className="col-md-2 nav-item d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFF" className="bi bi-list" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                                Eletrônicos
                                {/*sub menu de eletrônicos*/}
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a href="./smartphones">Smartphone</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./notebooks">Notebook</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./tablets">Tablet</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./computadores">Computador</a>
                                    </li>
                                </ul>
                                {/*fim do sub menu de eletrônicos*/}
                            </li>
                            {/*fim do menu eletrônicos*/}
                        </ul>
                    </section>
                </nav>
        </div> 
    );
  }
}
