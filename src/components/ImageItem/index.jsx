import { Link } from "react-router-dom";

const ImagemItem = ({ src, alt, classNameImg, id }) => {
  return (
    <>
      <Link to={`image-selected/${id}`}>
        <img src={src} alt={alt} className={classNameImg} />
      </Link>
    </>
  );
};

export default ImagemItem;
