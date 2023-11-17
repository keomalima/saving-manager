export const prettyDate = (date) => {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-4); // Get the last two digits of the year

    return `${day}/${month}/${year}`;
  }

  const formattedDate = formatDate(date);

  return formattedDate;
};
