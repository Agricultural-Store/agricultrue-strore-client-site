export type AppContextType = {
  openAuth: boolean;
  setOpenAuth: (open: boolean) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  isCompleted: boolean;
  setIsCompleted: (isCompleted: boolean, callback?: () => void) => void;
  openCart: boolean;
  setOpenCart: (open: boolean) => void;
};
