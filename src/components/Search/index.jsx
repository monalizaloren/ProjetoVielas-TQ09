import SearchContainer from "./SearchContainer";
import { IoMdSearch } from "react-icons/io";

const Search = () => {
  return (
    <SearchContainer>
      <IoMdSearch
        style={{
          color: "black",
          fontSize: "1.7em",
          position: "absolute",
          top: "0.1em",
          left: "0.5em",
        }}
      />
      <input type="text" placeholder="BUSCA" />
    </SearchContainer>
  );
};

export default Search;
