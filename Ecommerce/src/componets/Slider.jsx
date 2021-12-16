import React from 'react';

export default class Slider extends React.Component {

    render() {
        return (
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
  
        );
    }

}




