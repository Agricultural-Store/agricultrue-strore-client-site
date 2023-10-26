import React, { ReactNode, useState } from "react";
import { AppContext } from "./AppContext";

type Props = {
  children: ReactNode;
};

const AppProvider = ({ children }: Props) => {
  const [openAuth, setOpenAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const handleCompleted = (isCompleted: boolean, callback?: () => void) => {
    setIsCompleted(isCompleted);
    callback?.();
  };

  return (
    <AppContext.Provider
      value={{
        openAuth,
        setOpenAuth,
        isLoading,
        setIsLoading,
        isCompleted,
        setIsCompleted: handleCompleted,
        openCart: openCart,
        setOpenCart: setOpenCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
