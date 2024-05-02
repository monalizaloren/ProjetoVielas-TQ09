import './banner.css';
import BannerCard from "../BannerCard/BannerCard";
import BannerCarousel from "../BannerCarousel/BannerCarousel";


const Banner = () => {
    return (
        <div className="banner">
                <BannerCard />
                <BannerCarousel />
        </div>
       
    );
}



export default Banner;

