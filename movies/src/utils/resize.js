import { useEffect, useState } from "react";

export const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setTimeout(handleWindowResize, 1000)
    });

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { width };
};
