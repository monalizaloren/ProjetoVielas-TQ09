import BannerCarouselContainer from "./BannerCarouselContainer";
import ImageData from "../../db/ImageData";
import ImageItem from "../ImageItem";
import { register } from "swiper/element/bundle";

register();
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const BannerCarousel = () => {
  return (
    <BannerCarouselContainer>
      <Swiper slidesPerView={1} autoplay loop>
        <SwiperSlide>
          <ImageItem {...ImageData[52]} />
        </SwiperSlide>
        <SwiperSlide>
          <ImageItem {...ImageData[23]} />
        </SwiperSlide>
        <SwiperSlide>
          <ImageItem {...ImageData[67]} />
        </SwiperSlide>
      </Swiper>
    </BannerCarouselContainer>
  );
};

export default BannerCarousel;
