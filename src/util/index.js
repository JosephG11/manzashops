import { useEffect, useState } from "react";

export const useScreenSizeLogger = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      console.log(`Screen size: ${window.innerWidth}x${window.innerHeight}`);
    };

    window.addEventListener("resize", handleResize);

    // Log the initial size
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};
