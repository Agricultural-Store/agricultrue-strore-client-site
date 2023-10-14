import { AppContextType } from "@/types/app";
import { createContext } from "react";

export const AppContext = createContext<AppContextType>({
  openAuth: false,
  setOpenAuth: () => null,
  isLoading: false,
  setIsLoading: () => null,
});
