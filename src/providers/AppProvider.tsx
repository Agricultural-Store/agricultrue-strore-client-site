import React, { ReactNode, useState } from "react";
import { AppContext } from "./AppContext";

type Props = {
  children: ReactNode;
};

const AppProvider = ({ children }: Props) => {
  const [openAuth, setOpenAuth] = useState(false);

  return (
    <AppContext.Provider value={{ openAuth, setOpenAuth }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
