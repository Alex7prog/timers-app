import { useEffect, useState } from 'react';

const useLocalStorage = <T>(
  key: string,
  initialValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState(() => {
    const localStorageValue = localStorage.getItem(key);
    return localStorageValue ? JSON.parse(localStorageValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export { useLocalStorage };
