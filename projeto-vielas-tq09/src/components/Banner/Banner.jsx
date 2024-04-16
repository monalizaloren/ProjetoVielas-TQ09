import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './banner.css';


const Banner = () => {
    return (
        <div className='banner'>
            <div className='texto'>
                <h1 className='texto-1'>VIELAS</h1>

                <p className='paragrafo'>Um banco de imagens pensado para mostrar a diversidade das periferias de São Paulo.
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
                    <img src="./imagens/pauta-com-o-ngks-no-jardim-amalia-capao-redondo---zona-sul---sp2021_leu-britto-20_50998249707_o.jpg" className="d-block w-100" alt="." />
                </div>
                <div className="carousel-item">
                     <img src="./imagens/perifacon-2023_leu-britto-119_53085212824_o.jpg" className="d-block w-100" alt="..."/> 
                </div>
                <div className="carousel-item">
                    <img src="./imagens/canteiro-de-obras-do-futuro-parque-linear-de-helipolis_51973255132_o.jpg" className="d-block w-100" alt="..."/>
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

