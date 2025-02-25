import { useEffect, useState } from "react";

export const useTimer = (isActive: boolean, shouldReset: boolean) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval: number | null = null;
    
    if (isActive) {
      interval = setInterval(() => {
        setTimer(prevTime => prevTime + 1);
      }, 1000);
    } else if (!isActive && interval) {
      clearInterval(interval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive]);

  useEffect(() => {
    if (shouldReset) {
      setTimer(0);
    }
  }, [shouldReset]);

  return timer;
};