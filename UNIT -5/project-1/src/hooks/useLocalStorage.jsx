import { useState } from "react";
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      if (storedValue !== null) {
        return JSON.parse(storedValue);
      }
      return initialValue;
    } catch (error) {
      console.error("Error reading localStorage:", error);
      return initialValue;
    }
  });
  const updateValue = (newValue) => {
    try {
      const valueToStore =
        newValue instanceof Function
          ? newValue(value)
          : newValue;
      setValue(valueToStore);
      localStorage.setItem(
        key,
        JSON.stringify(valueToStore)
      );
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  };
  return [value, updateValue];
}
export default useLocalStorage;