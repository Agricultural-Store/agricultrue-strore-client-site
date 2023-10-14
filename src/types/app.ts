export type AppContextType = {
  openAuth: boolean;
  setOpenAuth: (open: boolean) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) =>void;
};
