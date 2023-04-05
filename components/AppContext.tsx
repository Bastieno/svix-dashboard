'use client';
import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

type ContextValue = {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  toggleOpen: () => void;
};

const AppContext = createContext<ContextValue>({
  openMenu: false,
  setOpenMenu: () => {},
  toggleOpen: () => {},
});

export const useAppContext = () => useContext(AppContext);

function AppContextProvider({ children }: { children: React.ReactNode }) {
  const [openMenu, setOpenMenu] = useState(false);

  const context = {
    openMenu,
    setOpenMenu,
    toggleOpen: () => setOpenMenu(!openMenu),
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
