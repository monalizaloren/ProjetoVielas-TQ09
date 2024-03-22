import React from "react";
import './banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <h1>VIELAS</h1>

            <p>Um banco de imagens pensado para mostrar a diversidade das periferias de São Paulo.
            </p>
            <p>Nascido nas quebradas e fomentado por quem vive e pensa nelas.
            </p>
            <div>
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