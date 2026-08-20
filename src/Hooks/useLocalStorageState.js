import { useEffect, useState } from "react";

function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue !== null ? JSON.parse(storedValue) : initialState;
    } catch (error) {
      console.error("Failed to read localStorage:", error);
      return initialState;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Failed to save to localStorage:", error);
    }
  }, [key, value]);
  return [value, setValue];
}

export default useLocalStorageState;
