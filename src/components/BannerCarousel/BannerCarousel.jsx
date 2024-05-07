import "./BannerCarousel.css"
import BancoDeImagens from "../../db/BancoDeImagens/BancoDeImagens";import img01carrocel from '../../'

const BannerCarousel = () => {
    return (
        <div className='BannerCarousel'>
            <img src={BancoDeImagens[20].src} className="" alt="." />    
        </div>
    )
}

export default BannerCarousel;