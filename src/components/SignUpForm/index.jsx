import { Link } from "react-router-dom";
import SignUpFormContainer from "./SignUpFormContainer";

const SignUpForm = () => {
  return (
    <SignUpFormContainer>
      <div className="first-last-name-group">
        <div className="label-input-group">
          <label htmlFor="first-name">Nome</label>
          <input type="text" id="first-name" />
        </div>
        <div className="label-input-group">
          <label htmlFor="last-name">Sobrenome</label>
          <input type="text" id="last-name" />
        </div>
      </div>
      <div className="label-input-group">
        <label htmlFor="e-mail">Email</label>
        <input type="email" id="e-mail" />
      </div>
      <div className="label-input-group">
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" />
      </div>
      <div className="label-input-group">
        <label htmlFor="confirm-password">Confime senha</label>
        <input type="password" id="confirm-password" />
      </div>
      <small className="text-according">
        Ao preencher o formulário acima você concorda com os nossos{" "}
        <Link>Turmos de uso</Link> e nossa <Link>Política de Privacidade</Link>.
      </small>
      <button type="submit" className="btn-create-account">
        Criar Conta
      </button>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
