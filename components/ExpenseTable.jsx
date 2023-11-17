import { lastTransactions } from '@/utils/lastTransactions';
import { prettyDate } from '@/utils/prettyData';
import { formatNumber } from '@/utils/formatNumber';

const ExpenseTable = ({ transactions, eur }) => {
  const filteredTransactions = lastTransactions(transactions);

  const eurValue = (data) => {
    const comercialValue = (data / eur).toFixed(2);
    return comercialValue;
  };

  return (
    <div className='mt-15 flex flex-col rounded-lg bg-white p-8 text-center shadow-lg md:mt-0'>
      <table className='table-auto'>
        <thead className='border-b-2 border-textBlue'>
          <tr className='text-left text-textBlue text-2xl'>
            <th className='p-2'>Date</th>
            <th className='p-2'>Type</th>
            <th className='p-2'>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((value, index) => (
            <tr key={index} className='text-left text-xl'>
              <td className='p-2 font-medium'>{prettyDate(value.date)}</td>
              <td className='p-2 text-lg'>
                <span
                  className={`rounded-lg p-1 uppercase font-medium tracking-wider ${
                    value.type === 'income'
                      ? 'text-textGreen bg-green-200'
                      : value.type === 'expense'
                      ? 'text-textRed  bg-red-200'
                      : ''
                  }`}
                >
                  {value.type}
                </span>
              </td>
              <td
                className={`p2 font-medium ${
                  value.type === 'income'
                    ? 'text-textGreen'
                    : value.type === 'expense'
                    ? 'text-textRed '
                    : ''
                }`}
              >
                {formatNumber(value.amount)} BRL {''}
                <span className='text-center text-sm font-normal tracking-widest text-gray-500'>
                  ({formatNumber(eurValue(value.amount))} EUR)
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
