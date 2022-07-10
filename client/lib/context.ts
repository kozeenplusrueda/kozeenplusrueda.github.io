import { createContext } from "react";

export interface AppContextInterface {
  menuOpened: boolean;
  setMenuOpened: (menuOpened: boolean) => void;
}

export const SampleAppContext: AppContextInterface = {
  menuOpened: false,
  setMenuOpened: () => {},
};

export const AppContext = createContext<AppContextInterface>(SampleAppContext);
