import React from 'react';

export default class BreadCrumb extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">{this.props.tipo_categoria}</li>
                        <li className="breadcrumb-item active" aria-current="page">{this.props.nome_categoria}</li>
                        </ol>
                </nav>
            </div> 
            
        )
    }
    
}




