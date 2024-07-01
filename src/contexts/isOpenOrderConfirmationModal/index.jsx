import { createContext, useState } from "react";

export const IsOpenOrderConfirmationModalContext = createContext({});

export const IsOpenOrderConfirmationModalProvider = ({ children }) => {
  const [isOpenOrderConfirmationModal, setIsOpenOrderConfirmationModal] =
    useState(false);
  return (
    <IsOpenOrderConfirmationModalContext.Provider
      value={[isOpenOrderConfirmationModal, setIsOpenOrderConfirmationModal]}
    >
      {children}
    </IsOpenOrderConfirmationModalContext.Provider>
  );
};
