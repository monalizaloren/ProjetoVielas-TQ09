import Logo from "../Logo";
import HeaderContainer from "./HeaderContainer";
import { useContext } from "react";
import { IsOpenLoginModalContext } from "../../contexts/IsOpenLoginModal";

const Header = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useContext(
    IsOpenLoginModalContext
  );
  return (
    <HeaderContainer>
      <Logo />
      <section className="login-area-header">
        <p
          className="description-login"
          onClick={() => setIsOpenLoginModal(!isOpenLoginModal)}
        >
          login
        </p>
        <div className="image-user-container"></div>
      </section>
    </HeaderContainer>
  );
};

export default Header;
