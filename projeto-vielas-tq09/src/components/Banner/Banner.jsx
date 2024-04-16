import React from "react";
import './banner.css'


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
                <Carrossel />
            </div>
        </div>
    );
}

const Carrossel = () => {
    return (
        <div className='carrossel'>
        </div>
    );
}

export default Banner;
export { Carrossel };
