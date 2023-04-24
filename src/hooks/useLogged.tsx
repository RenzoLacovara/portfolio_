import { useState, useEffect } from "react";

export const useSubscribed = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  useEffect(() => {
    // Aquí puedes agregar la lógica para determinar si el usuario está subscrito o no
    // por ejemplo, una llamada a la API o el acceso a una cookie
    // Por ahora, lo estableceremos en verdadero para fines de demostración
    setIsSubscribed(true);
  }, []);

  return isSubscribed;
};

// function useWithSubscribed(Component) {
//   return function WithSubscribed(props) {
//     const isSubscribed = useSubscribed();
//     if (!isSubscribed) return <div>No estás suscrito</div>;
//     return <Component {...props} />;
//   };
// }
