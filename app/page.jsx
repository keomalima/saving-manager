'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

import Feed from '@/components/Feed';
import ExpenseTable from '@/components/ExpenseTable';
import MonthTable from '@/components/MonthTable';
import { fetchEur } from '@/utils/fetchEur';

const Home = () => {
  const { data: session } = useSession() || { data: null };
  const [transactions, setTransactions] = useState([]);
  const [euroExchange, setEuroExchange] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      // Check if session is available
      if (session && session.user && session.user.id) {
        try {
          const response = await fetch(`/api/transactions/${session.user.id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch transactions');
          }
          const data = await response.json();
          setTransactions(data);
        } catch (error) {
          console.error('Error fetching transactions:', error);
          // Handle error (show a message to the user, etc.)
        } finally {
          setLoading(false);
        }
      } else {
        // Handle the case where session or user is undefined
        console.error('Session or user is undefined.');
        setLoading(false); // Update loading state to prevent indefinite loading
      }
    };

    // Call fetchTransactions only if session is defined
    if (session) {
      fetchTransactions();
    }
  }, [session]); // Include session as a dependency

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetchEur();
        setEuroExchange(response);
      } catch (error) {
        console.error('Error fetching transactions:', error);
        // Handle error (show a message to the user, etc.)
      }
    };
    fetchExchangeRate();
  }, []);

  return (
    <div>
      <p className='text-textBlue font-bold text-3xl mb-5'>My Money</p>
      <Feed eur={euroExchange} transactions={transactions} />
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <div>
          <p className='text-textBlue font-bold text-3xl my-5'>
            Saved by Month
          </p>
          <MonthTable eur={euroExchange} transactions={transactions} />
        </div>
        <div>
          <p className='text-textBlue font-bold text-3xl my-5'>
            Last Transactions
          </p>
          <ExpenseTable eur={euroExchange} transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default Home;
