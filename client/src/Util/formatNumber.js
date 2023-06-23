export const formatNumber = (num, round = false) => {
    if (typeof num !== "number") {
        return num;
      }
      const parts = num.toFixed(round ? 2 : 0).toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
  }

export const  abbreviateNumber= (num, round = false)=> {

    if (typeof num !== "number") {
      return num;
    }
    const parts = num.toFixed(round ? 2 : 0).toString().split(".");

    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    const number = parseFloat(parts[0].replace(/,/g, ''));
      return isNaN(number) ? parts[0]:
       number >= 1e6 ? (Number.isInteger(number/1e6) ? (number/1e6).toFixed(0) : (number/1e6).toFixed(1)) + 'M' :
       number >= 1e3 ? (Number.isInteger(number/1e3) ? (number/1e3).toFixed(0) : (number/1e3).toFixed(1)) + 'K' :
       parts[0];
     
    }