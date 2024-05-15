import Logo from "../Logo";
import HeaderContainer from "./HeaderContainer";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <selection className="login-area-header">
        <p className="descricao-login">login</p>
        <div className="image-user-container"></div>
      </selection>
    </HeaderContainer>
  );
};

export default Header;
