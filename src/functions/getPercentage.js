export const getPercentage = (current, total) =>{
    return {
               percentage: current / total * 100,
               deg: (current / total * 100) * 3.6,
               remaining: total - current
              }
}