import Transaction from '@/models/transaction';
import { connectToDB } from '@/utils/database';

export const POST = async (req, res) => {
  const { userId, date, amount, type } = await req.json();

  try {
    await connectToDB();

    const newTransaction = new Transaction({
      creator: userId,
      date,
      amount,
      type,
    });

    await newTransaction.save();

    return new Response(JSON.stringify(newTransaction), { status: 201 });
  } catch (error) {
    return (
      new Response('Failed to create a new transaction'),
      {
        status: 201,
      }
    );
  }
};
