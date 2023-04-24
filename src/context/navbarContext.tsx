import { createContext, useContext, useState } from "react";

export interface INavbarContext {
  responsive: boolean;
  setResponsive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavbarContext = createContext<INavbarContext>(
  {} as INavbarContext
);

export function ResponsiveProvider({ children }: any) {
  const [responsive, setResponsive] = useState(false);
  const sharedData: INavbarContext = { responsive, setResponsive };

  return (
    <NavbarContext.Provider value={sharedData}>
      {children}
    </NavbarContext.Provider>
  );
}
