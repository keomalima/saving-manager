import { Schema, model, models } from 'mongoose';

const TransactionSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  date: {
    type: Date,
    required: [true, 'Date is required'],
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required'],
  },
  type: {
    type: String,
    required: [true, 'Type is required'],
  },
});

const Transaction =
  models.Transaction || model('Transaction', TransactionSchema);

export default Transaction;
