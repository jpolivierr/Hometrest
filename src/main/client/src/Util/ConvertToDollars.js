
export const convertToDollars = (num) => {
    if (typeof num !== 'number' || isNaN(num)) {
      return '';
    }

    return `$${num.toLocaleString()}`
}

export const abbreviateNumber = (num) => {
    if (typeof num !== 'number' || isNaN(num)) {
      return '';
    }
  
    if (num < 1000) {
      return `$${num.toLocaleString()}`;
    }
  
    const abbreviations = [
      { value: 1e6, symbol: 'M' },
      { value: 1e3, symbol: 'K' },
    ];
  
    for (const { value, symbol } of abbreviations) {
      if (num >= value) {
        return `$${(num / value).toFixed(1)}${symbol}`;
      }
    }
  
    return `$${num.toLocaleString()}`;
  };

  export const removeNoneNumericValue = (value) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    if (!/^\d+$/.test(numericValue)) { 
        return; 
      }
      return numericValue;
  }