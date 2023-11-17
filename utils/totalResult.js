export const totalResult = (data) => {
  const totalResult = data.reduce((accumulator, currentValue) => {
    const amountToAdd =
      currentValue.type === 'income'
        ? currentValue.amount
        : -currentValue.amount;
    return accumulator + amountToAdd;
  }, 0);

  const roundedTotalAmount = totalResult.toFixed(2); // Round to 2 decimal places

  return roundedTotalAmount;
};
