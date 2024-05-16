import ImageGalleryContainer from "./ImageGalleryContainer";

const ImageGallery = ({ children }) => {
  return (
    <ImageGalleryContainer className="image-gallery">
      {children}
    </ImageGalleryContainer>
  );
};

export default ImageGallery;
