import { useState, useEffect } from "react";
export const useRender = () => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    let timeout;
    if (typeof window !== undefined) {
      setTimeout(() => {
        setIsRendered(true);
      }, 750);
    }
    return () => {
      clearTimeout(timeout);
      setIsRendered(false);
    };
  }, []);

  return { isRendered };
};
