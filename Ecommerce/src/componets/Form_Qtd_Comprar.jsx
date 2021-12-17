import React from 'react';


export default class Form_Qtd_Comprar extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        return (
            <form action="#">
                <div className="preco-info col-md-12">
                    <div className="row">
                        <select className="form-select" aria-label="produtos-quantidade-itens">
                            <option selected>Quantidade</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                        <div className="produtos-id">
                            {this.props.qtd_estoque} disponíveis
                        </div>
                    </div>
                </div>

                <button type="submit" className="btn btn-success col-md-12">Comprar</button>
            </form>
            
        )
    }
    
}




