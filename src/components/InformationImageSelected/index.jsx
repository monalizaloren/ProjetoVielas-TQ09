import InformationImageSelectedContainer from "./InformationImageSelectedContainer";
import ImageData from "../../db/ImageData";
import ImageItem from "../ImageItem";
import { Link } from "react-router-dom";
import { IsOpenOrderConfirmationModalContext } from "../../contexts/isOpenOrderConfirmationModal";
import { useContext } from "react";

const InformationImageSelected = ({ indexImage }) => {
  const [isOpenOrderConfirmationModal, setIsOpenOrderConfirmationModal] =
    useContext(IsOpenOrderConfirmationModalContext);

  return (
    <InformationImageSelectedContainer>
      <div className="image-selected-container">
        <ImageItem classNameImg="image-selected" {...ImageData[indexImage]} />
      </div>
      <div className="information-more-button">
        <div className="information-image-selected">
          <h2 className="title-image-selected">
            {ImageData[indexImage].title}
          </h2>
          <p className="description-image-selected">
            {ImageData[indexImage].description}
          </p>
          <p>
            Foto de{" "}
            <a href="#" className="owner-image-selected">
              {ImageData[indexImage].owner}
            </a>
          </p>
        </div>
        <Link
          onClick={() =>
            setIsOpenOrderConfirmationModal(!isOpenOrderConfirmationModal)
          }
          className="btn-image-selected"
        >
          COMPRAR
        </Link>
      </div>
    </InformationImageSelectedContainer>
  );
};

export default InformationImageSelected;
