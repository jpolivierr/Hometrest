export const getNextTwoWeeks =()=> {
        
    const today = new Date();
    const nextTwoWeeks = [];
  
    // Iterate over the next 14 days
    for (let i = 0; i < 14; i++) {
      const currentDate = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
      const day = currentDate.toLocaleString('en-US', { weekday: 'short' });
      const date = currentDate.getDate();
      const month = currentDate.toLocaleString('en-US', { month: 'long' });
  
      nextTwoWeeks.push({ day, date, month });
    }
  
    return nextTwoWeeks;
  }

  export const time = [
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM"
]