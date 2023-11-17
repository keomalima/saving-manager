import Transaction from '@/models/transaction';
import { connectToDB } from '@/utils/database';

// GET
export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const transaction = await Transaction.find({ creator: params.id }).populate(
      'creator'
    );

    return new Response(JSON.stringify(transaction), {
      status: 200,
    });
  } catch (error) {
    return new Response('Failed to fetch all transaction', { status: 500 });
  }
};
