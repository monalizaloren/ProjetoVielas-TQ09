import { Link } from "react-router-dom";
import LogoContainer from "./LogoContainer";

const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/" className="logo-link">
        <div className="rows-logo">
          <hr className="row-logo" />
          <hr className="row-logo" />
          <hr className="row-logo" />
        </div>
        <h1 className="title-logo">VIELAS</h1>
      </Link>
    </LogoContainer>
  );
};

export default Logo;
