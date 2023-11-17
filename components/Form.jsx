import Link from 'next/link';

const Form = ({
  type,
  handleSubmit,
  transaction,
  setTransaction,
  submitting,
}) => {
  return (
    <div className='space-y-2 rounded-lg bg-white p-8 shadow-lg md:mt-0'>
      <form onSubmit={handleSubmit}>
        <div className='border-b border-gray-900/10 '>
          <h2 className='text-lg font-semibold leading-7 text-gray-900'>
            {type} transaction
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            Input your transactions here
          </p>

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-3'>
              <label className='block text-sm font-medium leading-6 text-gray-900'>
                Date
              </label>
              <div className='mt-2'>
                <input
                  type='date'
                  name='date'
                  value={transaction.date}
                  onChange={(e) =>
                    setTransaction({ ...transaction, date: e.target.value })
                  }
                  id='date'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label className='block text-sm font-medium leading-6 text-gray-900'>
                Amount
              </label>
              <div className='mt-2'>
                <input
                  type='number'
                  name='amount'
                  placeholder='Enter the total amount'
                  id='amount'
                  value={transaction.amount}
                  onChange={(e) =>
                    setTransaction({ ...transaction, amount: e.target.value })
                  }
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label className='block text-sm font-medium leading-6 text-gray-900'>
                Type
              </label>
              <div className='mt-2'>
                <select
                  id='type'
                  name='type'
                  required
                  value={transaction.type}
                  onChange={(e) =>
                    setTransaction({ ...transaction, type: e.target.value })
                  }
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                >
                  <option disabled value='' hidden>
                    Select Type
                  </option>
                  <option value={'income'}>Income</option>
                  <option value={'expense'}>Expense</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-6 flex items-center justify-end gap-x-6'>
          <Link
            href='/'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            Cancel
          </Link>
          <button
            type='submit'
            disabled={submitting}
            className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            {submitting ? 'Saving...' : 'Save'}
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
