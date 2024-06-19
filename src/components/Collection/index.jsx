import { Link } from "react-router-dom";
import CollectionContainer from "./CollectionContainer";
import ImageData from "../../db/ImageData";

const Collection = () => {
  return (
    <CollectionContainer>
      <Link to={`collections/${ImageData[11].id}`} className="link-collection">
        <div className="collection-image-container">
          <img className="image-collection" {...ImageData[11]} />
        </div>
        <div className="title-description-colection-container">
          <h3 className="title-collection">Crise Financeira</h3>
          <p className="description-collection">
            Como a alta dos preços impacta as famílias das periferias
          </p>
        </div>
      </Link>
    </CollectionContainer>
  );
};

export default Collection;
