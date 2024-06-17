import styled from "styled-components";

const PaymentGatewayContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 0.2rem;

  .logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20rem;
  }

  .logo-link {
    flex-direction: column;
    gap: 0;
  }

  .title-logo {
    color: var(--colorPrimary);
    font-size: 4em;
  }

  .row-logo {
    background-color: var(--colorPrimary);
  }

  .text-gtw-payment {
    font-size: 0.8em;
    color: var(--colorDarkGray);
  }
`;

export default PaymentGatewayContainer;
