import { useState, useEffect } from "react";
export const useRender = () => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      setIsRendered(true);
    }
    return () => setIsRendered(false);
  }, []);

  return { isRendered };
};
