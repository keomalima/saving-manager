// Example object
export const lastTransactions = (data) => {
  // Sort the array based on the date in descending order
  const sortedArray = data.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Get the last 5 objects based on the sorted dates
  const lastFiveObjects = sortedArray.slice(0, 5);

  return lastFiveObjects;
};
