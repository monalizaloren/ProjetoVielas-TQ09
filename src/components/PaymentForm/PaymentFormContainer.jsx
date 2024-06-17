import styled from "styled-components";

const PaymentFormContainer = styled.form`
  .inputs-group {
    display: flex;
  }

  .inputs-group.card-details {
    flex-direction: column;
  }

  .inputs-exp-cvc-group {
    display: flex;
  }

  .label-input-group {
    display: flex;
    flex-direction: column;
    margin: 0.3rem;
  }

  input {
    border: none;
    border: 1px solid var(--colorGray);
    padding: 0.5rem;
    border-radius: 0.6rem;
  }

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  .payment-logos {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }
  .payment-logo {
    width: 2.5rem;
  }

  button {
    margin-top: 1rem;
    width: 100%;
    border: none;
    border-radius: 0.6rem;
    background-color: var(--colorPrimary);
    color: var(--colorWhite);
    height: 2.5rem;
    font-weight: 900;
    cursor: pointer;
  }

  button:hover {
    opacity: 0.9;
  }
`;

export default PaymentFormContainer;
