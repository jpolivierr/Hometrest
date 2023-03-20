import { useState, useEffect } from 'react';

function useNumberIncrementer() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // Calculate the new number based on the width
      const newNumber = Math.round(width / 100);
      setNumber(newNumber);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return number;
}

export default useNumberIncrementer;
