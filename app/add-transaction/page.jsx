'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@/components/Form';

const AddTransaction = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [transaction, setTransaction] = useState({
    date: '',
    amount: '',
    type: '',
  });

  const createTransaction = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/transactions/new', {
        method: 'POST',
        body: JSON.stringify({
          date: transaction.date,
          amount: transaction.amount,
          type: transaction.type,
          userId: session?.user.id,
        }),
      });

      if (response.ok) {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      transaction={transaction}
      setTransaction={setTransaction}
      submitting={submitting}
      type='Add a new'
      handleSubmit={createTransaction}
    />
  );
};
export default AddTransaction;
