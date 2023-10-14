import React, { ReactNode, useState } from "react";
import { AppContext } from "./AppContext";

type Props = {
  children: ReactNode;
};

const AppProvider = ({ children }: Props) => {
  const [openAuth, setOpenAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AppContext.Provider value={{ openAuth, setOpenAuth, isLoading, setIsLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
