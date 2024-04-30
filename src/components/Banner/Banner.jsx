import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './banner.css';
import img01carrocel from '../../images/pauta-com-o-ngks-no-jardim-amalia-capao-redondo---zona-sul---sp2021_leu-britto-20_50998249707_o.jpg'
import img02carrocel from '../../images/perifacon-2023_leu-britto-119_53085212824_o.jpg'
import img03carrocel from '../../images/canteiro-de-obras-do-futuro-parque-linear-de-helipolis_51973255132_o.jpg'


const Banner = () => {
    return (
        <div className='banner'>
            <div className='texto-banner'>
                <h1 className='texto-tema-banner'>VIELAS</h1>

                <p className='paragrafo-banner'>Um banco de imagens pensado para mostrar a diversidade das periferias de São Paulo.
                    <br />
                    Nascido nas quebradas e fomentado por quem vive e pensa nelas.
                </p>
            </div>
            <div className="componente-carrossel">
                <MyCarousel />
            </div>
        </div>
    );
}

export const MyCarousel = () => {
    return (
        <div className="carousel-slide" data-bs-ride="true">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img01carrocel} className="d-block w-100" alt="." />
                </div>
                <div className="carousel-item">
                     <img src={img02carrocel} className="d-block w-100" alt="..."/> 
                </div>
                <div className="carousel-item">
                    <img src={img03carrocel} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Banner;

