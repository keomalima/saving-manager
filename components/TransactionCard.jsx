import { formatNumber } from '@/utils/formatNumber';

const TransactionCard = ({ data, title, color, eur }) => {
  const eurValue = () => {
    const comercialValue = (data / eur).toFixed(2);
    return comercialValue;
  };

  return (
    <div className='mt-5 mb-10 flex flex-col items-center justify-center space-y-2 rounded-lg bg-white p-8 shadow-lg md:mt-0'>
      <h1 className='text-2xl font-bold text-textBlue'>{title}</h1>
      <div className='flex items-baseline space-x-2'>
        <h1 className={`text-4xl font-semibold tracking-wider text-${color}`}>
          {formatNumber(data)}
        </h1>
        <h1 className='text-2xl font-semibold text-textBlue'>BRL</h1>
      </div>
      <h2 className='text-center text-xl font-normal tracking-widest'>
        = {formatNumber(eurValue())} EUR
      </h2>
    </div>
  );
};

export default TransactionCard;
