import { Link } from "react-router-dom";
import ImageData from "../../db/ImageData";
import ImageGallery from "../ImageGallery";
import CollectionsAreaContainer from "./CollectionsAreaContainer";

const CollectionsArea = () => {
  return (
    <CollectionsAreaContainer>
      <h1>COLEÇÕES</h1>
      <ImageGallery>
        <Link
          to={`collections/${ImageData[0].id}`}
          className="first-collection"
        >
          <img {...ImageData[28]} />
          <h3>Eleições 2022</h3>
          <p>Como estão as eleições nas periferias e Grade São Paulo</p>
        </Link>
        <Link
          to={`collections/${ImageData[68].id}`}
          className="second-collection"
        >
          <img {...ImageData[68]} />
          <h3>Arte de Rua</h3>
          <p>Grafites que enfeitam as ruas das quebradas</p>
        </Link>
        <Link
          to={`collections/${ImageData[11].id}`}
          className="third-collection"
        >
          <img {...ImageData[11]} />
          <h3>Crise Financeira</h3>
          <p>Como a alta dos preços impacta as famílias das periferias</p>
        </Link>
      </ImageGallery>
    </CollectionsAreaContainer>
  );
};

export default CollectionsArea;
