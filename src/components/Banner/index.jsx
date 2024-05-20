import BannerCard from "../BannerCard";
import BannerCarousel from "../BannerCarousel";
import BannerContainer from "./BannerContainer";

const Banner = () => {
  return (
    <BannerContainer>
      <BannerCard />
      <BannerCarousel />
    </BannerContainer>
  );
};

export default Banner;
