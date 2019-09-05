import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  // State
  const [storedValue, setStoredValue] = useState(() => {
    // To retrieve an item from localStorage, call localStorage.getItem('itemName')
    const item = window.localStorage.getItem(key);

    // If that item doesn't exist, it will return undefined
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = value => {
    // Save state
    setStoredValue(value);
    // Save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
