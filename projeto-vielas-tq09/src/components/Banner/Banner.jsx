import React from "react";
import 'app.js'
import './banner.css'

 const Banner = () => {
    return (
        <div className='banner'>
            <h1>VIELAS</h1>
            <p>Um banco de imagens pensado para mostrar a diversidade das periferias de São Paulo.
            </p>
            <p>Nascido nas quebradas e fomentado por quem vive e pensa nelas.</p>
            <div>
                <Carrossel />
            </div>
        </div>
    );
 }

  export const Carrossel = () => {
    return (
        <div className='carrossel'>
            <img src="" alt="Banner 1" />
            <img src="" alt="Banner 2" />
            <img src="" alt="Banner 3" />
        </div>
    );
}   

 export default Banner;