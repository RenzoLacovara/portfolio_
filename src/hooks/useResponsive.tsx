import { NavbarContext } from "../context/navbarContext";
import { useContext } from "react";
export const useResponsive = () => {
  const responsiveContext = useContext(NavbarContext);
  if (!responsiveContext) {
    throw new Error("useResponsive must be used within a ResponsiveProvider");
  }

  return responsiveContext;
};
