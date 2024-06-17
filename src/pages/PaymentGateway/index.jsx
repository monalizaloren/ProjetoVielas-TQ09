import PaymentForm from "../../components/PaymentForm";
import Layout from "../../layout";
import Logo from "../../components/Logo";
import PaymentGatewayContainer from "./PaymentGatewayContainer";

const PaymentGateway = () => {
  return (
    <Layout>
      <PaymentGatewayContainer>
        <div className="logo-container">
          <Logo />
          <p className="text-gtw-payment">Gateway de pagamento</p>
        </div>
        <PaymentForm />
      </PaymentGatewayContainer>
    </Layout>
  );
};

export default PaymentGateway;
