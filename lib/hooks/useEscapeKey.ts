import { useCallback, useEffect } from "react";

const useEscapeKey = (callback: () => void) => {
  const handleEscKey = useCallback(
    (event) => {
      if (event.key === "Escape") {
        callback();
      }
    },
    [callback]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [handleEscKey]);
};

export default useEscapeKey;
