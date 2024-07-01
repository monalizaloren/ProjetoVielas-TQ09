import styled from "styled-components";

const OrderConfirmationModalContainer = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1001;

  .content-order-confirmation {
    padding: 1.5rem;
    background: rgba(256, 256, 256, 0.98);
    box-shadow: 0 0 10px #00000060;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .btns-group {
    display: flex;
    gap: 1rem;
  }

  .btn {
    border-radius: 0.8rem;
    padding: 0.5rem;
    border: 1px solid var(--colorGray);
  }

  .btn-confirm {
    background-color: var(--colorPrimary);
    color: var(--colorWhite);
  }

  .btn-confirm:hover {
    border-color: var(--colorBlack);
  }

  .btn-cancel {
    color: var(--colorBlack);
  }

  .btn-cancel:hover {
    border-color: var(--colorBlack);
  }
`;

export default OrderConfirmationModalContainer;
