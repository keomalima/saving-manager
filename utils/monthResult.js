export const monthResult = (data) => {
  // Get the current month and year
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // Months are zero-based, so add 1
  const currentYear = currentDate.getFullYear();

  // Filter transactions for the current month
  const filteredTransactions = data.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    const transactionMonth = transactionDate.getMonth() + 1;
    const transactionYear = transactionDate.getFullYear();

    return transactionMonth === currentMonth && transactionYear === currentYear;
  });

  // Calculate the total income and expense for the current month
  const monthResult = filteredTransactions.reduce(
    (accumulator, currentValue) => {
      const amountToAdd =
        currentValue.type === 'income'
          ? currentValue.amount
          : -currentValue.amount;
      return accumulator + amountToAdd;
    },
    0
  );

  return monthResult.toFixed(2);
};
