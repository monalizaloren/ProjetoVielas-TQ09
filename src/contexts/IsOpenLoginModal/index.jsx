import { createContext, useState } from "react";

export const IsOpenLoginModalContext = createContext({});

export const IsOpenLoginModalProvider = ({ children }) => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  return (
    <IsOpenLoginModalContext.Provider
      value={[isOpenLoginModal, setIsOpenLoginModal]}
    >
      {children}
    </IsOpenLoginModalContext.Provider>
  );
};
