
import { useState, useEffect } from 'react';

const isLocalStorageAvailable = () => {
  try {
    const testKey = 'localStorageTest';
    localStorage.setItem(testKey, 'testValue');
    localStorage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
};

const isSessionStorageAvailable = () => {
  try {
    const testKey = 'sessionStorageTest';
    sessionStorage.setItem(testKey, 'testValue');
    sessionStorage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
};

const isCookiesEnabled = () => {
  try {
    document.cookie = 'cookieTest=testValue';
    const result = document.cookie.indexOf('cookieTest=testValue') !== -1;
    document.cookie = 'cookieTest=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    return result;
  } catch (error) {
    return false;
  }
};

const useStorageManager = () => {

  const [storageAvailable, setStorageAvailable] = useState({
    cookies: false,
    localStorage: false,
    sessionStorage: false,
  });

  useEffect(() => {
    setStorageAvailable({
      cookies: isCookiesEnabled(),
      localStorage: isLocalStorageAvailable(),
      sessionStorage: isSessionStorageAvailable(),
    });
  }, []);

  const getValue = (key) => {
    if (storageAvailable.localStorage && localStorage.getItem(key)) {
      return localStorage.getItem(key);
    } else if (storageAvailable.sessionStorage && sessionStorage.getItem(key)) {
      return sessionStorage.getItem(key);
    } else if (storageAvailable.cookies) {
      const cookieValue = document.cookie.split('; ').find(row => row.startsWith(key));
      return cookieValue ? cookieValue.split('=')[1] : null;
    }
    return null;
  };

  const setValue = (key, value) => {
    try {
      if (storageAvailable.cookies) {
        document.cookie = `${key}=${value}; path=/`;
      } else if (storageAvailable.localStorage) {
        localStorage.setItem(key, value);
      } else if (storageAvailable.sessionStorage) {
        sessionStorage.setItem(key, value);
      } else {
        throw new Error('No storage mechanism available');
      }
    } catch (error) {
      console.error('Failed to set value in storage:', error);
    }
  };

  return { storageAvailable, getValue, setValue };
};

export default useStorageManager;
