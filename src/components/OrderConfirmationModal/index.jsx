import { Link } from "react-router-dom";
import OrderConfirmationModalContainer from "./OrderConfirmationModalContainer";
import { IsOpenOrderConfirmationModalContext } from "../../contexts/isOpenOrderConfirmationModal";
import { useContext } from "react";

const OrderConfirmationModal = () => {
  const [isOpenOrderConfirmationModal, setIsOpenOrderConfirmationModal] =
    useContext(IsOpenOrderConfirmationModalContext);

  if (isOpenOrderConfirmationModal) {
    return (
      <OrderConfirmationModalContainer>
        <div className="content-order-confirmation">
          <small className="text-order-confirmation">
            Ao confirmar este pedido de compra, será debitado 1 crédito de sua
            conta. <strong>Deseja continuar?</strong>
          </small>
          <div className="btns-group">
            <Link className="btn btn-confirm">Confirmar</Link>
            <Link
              className="btn btn-cancel"
              onClick={() =>
                setIsOpenOrderConfirmationModal(!isOpenOrderConfirmationModal)
              }
            >
              Cancelar
            </Link>
          </div>
        </div>
      </OrderConfirmationModalContainer>
    );
  }
};

export default OrderConfirmationModal;
