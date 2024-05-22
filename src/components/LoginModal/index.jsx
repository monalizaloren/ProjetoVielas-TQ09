import { Link } from "react-router-dom";
import LoginModalConatiner from "./LoginModeContainer";
import { useContext } from "react";
import { IsOpenLoginModalContext } from "../../contexts/IsOpenLoginModal";

const LoginModal = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useContext(
    IsOpenLoginModalContext
  );

  if (isOpenLoginModal) {
    return (
      <LoginModalConatiner>
        <div className="content-modal">
          <button
            className="btn-close"
            onClick={() => setIsOpenLoginModal(!isOpenLoginModal)}
          >
            X
          </button>
          <h1 className="title-modal">Bem vindo ;)</h1>
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <div className="input-checkbox-container">
              <input type="checkbox" />
              <small>me mantenha conectado</small>
            </div>
            <button className="btn-enter">ENTRAR</button>
          </form>
          <small className="text-forgot-password">
            Esqueceu a senha?{" "}
            <Link className="link-forgot-password">Clique aqui</Link>
          </small>
        </div>
      </LoginModalConatiner>
    );
  }
};

export default LoginModal;
