import ImageSelectedContainer from "./ImageSelectedContainer";
import Layout from "../../layout";
import Search from "../../components/Search";
import { useParams } from "react-router-dom";
import InformationImageSelected from "../../components/InformationImageSelected";
import TagCollections from "../../components/TagCollections";
import ImageGallery from "../../components/ImageGallery";
import ImageItem from "../../components/ImageItem";
import ImageData from "../../db/ImageData";
import Collection from "../../components/Collection";
import OrderConfirmationModal from "../../components/OrderConfirmationModal";
import { IsOpenOrderConfirmationModalProvider } from "../../contexts/isOpenOrderConfirmationModal";

const ImageSelected = () => {
  const { id } = useParams();
  const indexImage = id - 1;

  const TotalGalleryImages = Array.from({ length: 9 });

  return (
    <Layout>
      <IsOpenOrderConfirmationModalProvider>
        <Search />
        <ImageSelectedContainer>
          <InformationImageSelected indexImage={indexImage} />
          <Collection />
          <TagCollections />
          <h2>Fotos Semelhantes</h2>
          <ImageGallery>
            {TotalGalleryImages.map(() => (
              <ImageItem
                key={Math.random()}
                {...ImageData[Math.floor(Math.random() * 8) + 1]}
              />
            ))}
          </ImageGallery>
          <OrderConfirmationModal />
        </ImageSelectedContainer>
      </IsOpenOrderConfirmationModalProvider>
    </Layout>
  );
};

export default ImageSelected;
