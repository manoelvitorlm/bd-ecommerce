import React, { Fragment } from 'react';
const url = 'http://localhost:3000';

export default class Produto extends React.Component {

    constructor(props) {
        super(props);
    }
    

    render() {
        
        return (
            <Fragment>
                <a href={'/'+ this.props.id} className="produtos-container col-md-3">
                    <article className="produtos-itens">
                        <img src={this.props.img} className="img-fluid" alt={this.props.title}></img> 
                        {/* título dos produtos */}
                        <h2>{this.props.title}</h2>

                        {/* Preços dos produtos*/}
                        <strong className="produtos-preco">
                            R$ {this.props.preco},00
                        </strong>
                        {/* Fim Preços dos produtos*/}

                        <div className="produtos-id">
                            id = {this.props.id}
                        </div>
                    </article>
                </a>
            </Fragment>
        )
    }
}




