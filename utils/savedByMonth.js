export const savedByMonth = (data) => {
  const calculateAmountByMonth = (transactions) => {
    const amountByMonth = {};

    transactions.forEach((transaction) => {
      const date = new Date(transaction.date);
      const year = date.getUTCFullYear();
      const month = date.getUTCMonth() + 1;
      const key = `${year}-${String(month).padStart(2, '0')}`;

      if (!amountByMonth[key]) {
        amountByMonth[key] = 0;
      }

      if (transaction.type === 'income') {
        amountByMonth[key] += transaction.amount;
      } else if (transaction.type === 'expense') {
        amountByMonth[key] -= transaction.amount;
      }
    });

    return amountByMonth;
  };

  const totalAmountByMonth = calculateAmountByMonth(data);

  const createArrayOfObjects = (amountByMonth) => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const currentDate = new Date();
    const currentYear = currentDate.getUTCFullYear();
    const currentMonth = currentDate.getUTCMonth() + 1;

    let lastFiveMonthsData = [];
    let monthCounter = 0;

    let startMonthIndex = currentMonth - 6;
    if (startMonthIndex <= 0) {
      startMonthIndex += 12;
    }

    for (let i = startMonthIndex; monthCounter < 5 && i <= currentMonth; i++) {
      const monthIndex = i > 12 ? i - 12 : i;
      const key = `${currentYear}-${String(monthIndex).padStart(2, '0')}`;

      if (amountByMonth[key]) {
        const monthName = monthNames[monthIndex - 1];
        lastFiveMonthsData.unshift({
          month: monthName,
          amount: amountByMonth[key],
        });
        monthCounter++;
      }
    }

    return lastFiveMonthsData;
  };

  const lastFiveMonthsData = createArrayOfObjects(totalAmountByMonth);
  return lastFiveMonthsData;
};
