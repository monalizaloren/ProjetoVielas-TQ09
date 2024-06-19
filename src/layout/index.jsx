import { ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoginModal from "../components/LoginModal";
import Main from "../components/Main";
import { IsOpenLoginModalProvider } from "../contexts/IsOpenLoginModal";

const Layout = ({ children }) => {
  return (
    <>
      <ScrollRestoration />
      <IsOpenLoginModalProvider>
        <Header />
        <Main>{children}</Main>
        <Footer />
        <LoginModal />
      </IsOpenLoginModalProvider>
    </>
  );
};

export default Layout;
