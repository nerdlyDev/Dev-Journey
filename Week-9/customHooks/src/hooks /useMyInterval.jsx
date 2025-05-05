import { useEffect } from "react";

function useMyInterval(callback, delay) {
  useEffect(() => {
    // Set up an interval and store the interval ID
    const intervalId = setInterval(callback, delay);

    // Cleanup: Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [callback, delay]);
}
export default useMyInterval;
