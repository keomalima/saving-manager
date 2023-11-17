export const fetchEur = async () => {
  try {
    const response = await fetch(
      'https://economia.awesomeapi.com.br/last/EUR-BRL'
    );
    if (!response.ok) {
      throw new Error('Failed to fetch transactions');
    }
    const data = await response.json();
    const eur = data.EURBRL.high + 0.1;
    const eurValue = parseFloat(eur);
    const comercialEur = (eurValue + 0.1).toFixed(2);
    return comercialEur;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    // Handle error (show a message to the user, etc.)
  }

  const result = fetchExchangeRate();

  return result;
};
