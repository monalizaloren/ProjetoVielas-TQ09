import LoginAreaHeader from "../LoginAreaHeader";
import Logo from "../Logo";
import HeaderContainer from "./HeaderContainer";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <LoginAreaHeader />
    </HeaderContainer>
  );
};

export default Header;
