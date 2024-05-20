import Layout from "../../layout";
import ImageData from "../../db/ImageData";
import Search from "../../components/Search";
import TagCollections from "../../components/TagCollections";
import ImageGallery from "../../components/ImageGallery";
import ImageItem from "../../components/ImageItem";
import CollectionsArea from "../../components/CollectionsArea";
import Banner from "../../components/Banner";

const HomePage = () => {
  const TotalGalleryImages = Array.from({ length: 6 });

  return (
    <Layout>
      <Search />
      <TagCollections />
      <Banner />
      <CollectionsArea />
      <ImageGallery>
        {TotalGalleryImages.map(() => (
          <ImageItem
            key={Math.random()}
            {...ImageData[Math.floor(Math.random() * 8) + 1]}
          />
        ))}
      </ImageGallery>
    </Layout>
  );
};

export default HomePage;
