import { useEffect } from "react";

const useKeydownListener = (action: () => void) => {
  useEffect(() => {
    window.addEventListener("keydown", action);
    console.log('dsad')
    return () => {
        console.log('bye')
      window.removeEventListener("keydown", action);
    };
  }, [action]);
};

export default useKeydownListener;
