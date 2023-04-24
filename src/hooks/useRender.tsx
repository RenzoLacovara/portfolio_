import { useRef, useState, useEffect } from "react";
import { useOnScreen } from "./useOnScreen";

export const useRender = () => {
  const screenRef = useRef();
  const screenRefValue = useOnScreen(screenRef);
  const [isOnScreen, setIsOnScreen] = useState(false);
  useEffect(() => {
    if (!isOnScreen) setIsOnScreen(screenRefValue);
  }, [screenRefValue]);
  return { screenRef, isOnScreen };
};
