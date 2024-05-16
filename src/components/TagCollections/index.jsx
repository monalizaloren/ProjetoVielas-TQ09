import { Link } from "react-router-dom";
import TagCollectionsContainer from "./TagCollectionsContainer";

const TagCollections = () => {
  return (
    <TagCollectionsContainer>
      <Link to="collections/paraisopolis">#Paraisopolis</Link>
      <Link to="collections/saude">#Saude</Link>
      <Link to="collections/hospitais">#Hospitais</Link>
      <Link to="collections/coperifa">#Coperifa</Link>
      <Link to="collections/casa-da-cultura">#CasaDeCultura</Link>
      <Link to="collections/eleicoes-2022">#Eleições2022</Link>
      <Link to="collections/urnas">#Urnas</Link>
    </TagCollectionsContainer>
  );
};

export default TagCollections;
