import { savedByMonth } from '@/utils/savedByMonth';
import { formatNumber } from '@/utils/formatNumber';

const MonthTable = ({ transactions, eur }) => {
  const monthResults = savedByMonth(transactions);

  const eurValue = (data) => {
    const comercialValue = (data / eur).toFixed(2);
    return comercialValue;
  };

  return (
    <div className='mt-15 flex flexœ-col rounded-lg bg-white p-8 text-center shadow-lg md:mt-0 '>
      <table className='table-auto w-full'>
        <thead className='border-b-2 border-textBlue'>
          <tr className='text-left text-textBlue text-2xl'>
            <th className='p-2'>Month</th>
            <th className='p-2'>Type</th>
            <th className='p-2 '>Amount</th>
          </tr>
        </thead>
        <tbody>
          {monthResults.map((value, index) => (
            <tr key={index} className='text-left text-xl'>
              <td className='p-2 font-medium'>{value.month}</td>
              <td className='p-2 text-lg'>
                <span className='rounded-lg p-1 uppercase font-medium tracking-wider bg-green-200 text-textGreen'>
                  Saved
                </span>
              </td>
              <td
                className={`p-2 font-medium ${
                  value.amount < 0 ? 'text-textRed' : 'text-textGreen'
                }`}
              >
                {formatNumber(value.amount)} BRL{' '}
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

export default MonthTable;
