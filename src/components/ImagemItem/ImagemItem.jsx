import "./ImagemItem.css";

const ImagemItem = ({ src, alt, classNameImg }) => {
  return <img src={src} alt={alt} className={classNameImg} />;
};

export default ImagemItem;
