'use client';

import { useEffect, useState } from 'react';
import TransactionCard from './TransactionCard';
import { monthResult } from '@/utils/monthResult';
import { totalResult } from '@/utils/totalResult';
import { fetchEur } from '@/utils/fetchEur';

const Feed = ({ transactions, eur }) => {
  const totalSum = totalResult(transactions);
  const totalMonthSum = monthResult(transactions);

  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
      <TransactionCard
        title={'Saved this month'}
        data={totalMonthSum}
        color={'textGreen'}
        eur={eur}
      />
      <TransactionCard
        title={'Total Saved'}
        data={totalSum}
        color={'textGreen'}
        eur={eur}
      />
    </div>
  );
};

export default Feed;
