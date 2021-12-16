//import React from 'React';
import Header from '../componets/Header'
import NavBar from '../componets/NavBar';
import Footer from '../componets/Footer';

const Cadastro = () => {

    return (
        <div>
            <Header />
            <NavBar />

            <main>
                <form className="formulario container-md">
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">Nome do produto</label>
                        <input type="email" className="form-control" id="inputEmail4"></input>
                    </div>
                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">Detalhes do produto</label>
                        <input type="password" className="form-control" id="inputPassword4"></input>
                    </div>
                    <div className="col-md-4">
                        <label for="inputState" className="form-label">Categoria</label>
                        <select id="inputState" className="form-select">
                            <option selected>Tipo</option>
                            <option>Hardware</option>
                            <option>Eletrônicos</option>

                        </select>
                    </div>

                    <div className="col-12">
                        <label for="inputAddress2" className="form-label">Preço</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
                    </div>

                    <div className="col-md-6">
                        <label for="inputCity" className="form-label">Quantidade em estoque</label>
                        <input type="text" className="form-control" id="inputCity"></input>
                    </div>
                    
                    <div className="col-md-2">
                        <label for="inputZip" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="inputZip"></input>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck"></input>
                                <label className="form-check-label" for="gridCheck">
                                    Check me out
                                </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    );
}

export default Cadastro