import PaymentFormContainer from "./PaymentFormContainer";
import logoVisa from "../../assets/images/logo-visa.png";
import logoStripe from "../../assets/images/logo-stripe.png";
import logoPayPal from "../../assets/images/logo-paypal.png";
import logoMasterCard from "../../assets/images/logo-mastercard.png";
import logoGPlay from "../../assets/images/logo-g-play.png";

const PaymentForm = () => {
  return (
    <PaymentFormContainer action="" method="POST">
      <h4 className="section-titles">Dados Pessoais</h4>
      <section className="inputs-group personal-details">
        <div>
          <div className="label-input-group">
            <label htmlFor="address">Logradouro</label>
            <input
              type="text"
              id="address"
              placeholder="Rua PVC 145"
              name="address"
            />
          </div>
          <div className="label-input-group">
            <label htmlFor="state">Estado</label>
            <input type="text" id="state" placeholder="Ceará" name="state" />
          </div>
        </div>
        <div>
          <div className="label-input-group">
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              id="city"
              placeholder="Bom Sucesso"
              name="city"
            />
          </div>
          <div className="label-input-group">
            <label htmlFor="zip-code">CEP</label>
            <input
              type="text"
              id="zip-code"
              placeholder="00000-000"
              name="zip-code"
            />
          </div>
        </div>
      </section>
      <h4 className="section-titles">Métodos de Pagamentos</h4>
      <section className="payment-methods">
        <div className="payment-logos">
          <div className="payment-logo-container">
            <img className="payment-logo" src={logoVisa} alt="Logo Visa" />
          </div>
          <div className="payment-logo-container">
            <img className="payment-logo" src={logoStripe} alt="Logo Stripe" />
          </div>
          <div className="payment-logo-container">
            <img className="payment-logo" src={logoPayPal} alt="Logo PayPal" />
          </div>
          <div className="payment-logo-container">
            <img
              className="payment-logo"
              src={logoMasterCard}
              alt="Logo MasterCard"
            />
          </div>
          <div className="payment-logo-container">
            <img
              className="payment-logo"
              src={logoGPlay}
              alt="Logo Google Play"
            />
          </div>
        </div>
      </section>
      <h4 className="section-titles">Dados do cartão</h4>
      <section className="inputs-group card-details">
        <div>
          <div className="label-input-group">
            <label htmlFor="cardholder-name">Nome do Titular do Cartão</label>
            <input
              type="text"
              id="cardholder-name"
              placeholder="Impresso no cartão"
              name="cardholder-name"
            />
          </div>
          <div className="label-input-group">
            <label htmlFor="card-number">Número do Cartão</label>
            <input
              type="number"
              id="card-number"
              min={0}
              placeholder="Impresso no cartão"
              name="card-number"
            />
          </div>
        </div>
        <div className="inputs-exp-cvc-group">
          <div className="label-input-group">
            <label htmlFor="expirity">Validade</label>
            <input
              type="text"
              id="expirity"
              placeholder="mm/yyyy"
              name="expirity"
            />
          </div>
          <div className="label-input-group">
            <label htmlFor="cvc">CVC</label>
            <input
              type="number"
              id="cvc"
              min={0}
              placeholder="000"
              name="cvc"
            />
          </div>
        </div>
      </section>
      <button>Finalizar Compra</button>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
