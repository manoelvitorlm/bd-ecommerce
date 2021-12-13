import React from 'react';


export default class Produto extends React.Component {
    
    constructor(props){
        super(props);
    }

    render(){
        return (
            <article className="produtos-itens">
    
                        <img src={this.props.img} className="img-fluid" alt={this.props.title}></img>
    
                        {/* título dos produtos */}
                        <h2>{this.props.title}</h2>
    
                        {/* Preços dos produtos*/}
                        <strong className="produtos-preco">
                            R$ {this.props.preco}
                        </strong>
                        {/* Fim Preços dos produtos*/}
    
                        <div className="produtos-id">
                            id = {this.props.id}
                        </div>
    
            </article> 
        )
    }
}




