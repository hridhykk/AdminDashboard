import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const dummyTransactions = [
  { id: 1, customer: 'John Doe', date: '2025-05-01', status: 'Completed', amount: 125.00, product: 'Premium Plan' },
  { id: 2, customer: 'Jane Smith', date: '2025-05-01', status: 'Pending', amount: 259.99, product: 'Enterprise Plan' },
  { id: 3, customer: 'Robert Johnson', date: '2025-04-30', status: 'Completed', amount: 59.99, product: 'Basic Plan' },
  { id: 4, customer: 'Emily Davis', date: '2025-04-29', status: 'Failed', amount: 125.00, product: 'Premium Plan' },
  { id: 5, customer: 'Michael Brown', date: '2025-04-28', status: 'Completed', amount: 125.00, product: 'Premium Plan' },
  { id: 6, customer: 'Sarah Wilson', date: '2025-04-27', status: 'Pending', amount: 259.99, product: 'Enterprise Plan' },
  { id: 7, customer: 'David Miller', date: '2025-04-26', status: 'Completed', amount: 59.99, product: 'Basic Plan' },
  { id: 8, customer: 'Lisa Taylor', date: '2025-04-25', status: 'Failed', amount: 125.00, product: 'Premium Plan' },
];

export default function TransactionsTable() {
  const [transactions, setTransactions] = useState([...dummyTransactions]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    setSortConfig({ key, direction });

    const sortedData = [...transactions].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
      return 0;
    });

    setTransactions(sortedData);
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSortIcon = (name) => {
    if (sortConfig.key !== name) return null;
    return sortConfig.direction === 'ascending'
      ? <ChevronUp size={16} className="ml-1" />
      : <ChevronDown size={16} className="ml-1" />;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-800">Recent Transactions</h3>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th 
                className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('id')}
              >
                <div className="flex items-center">
                  ID {getSortIcon('id')}
                </div>
              </th>
              <th 
                className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('customer')}
              >
                <div className="flex items-center">
                  Customer {getSortIcon('customer')}
                </div>
              </th>
              <th 
                className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('date')}
              >
                <div className="flex items-center">
                  Date {getSortIcon('date')}
                </div>
              </th>
              <th 
                className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hidden sm:table-cell"
                onClick={() => requestSort('product')}
              >
                <div className="flex items-center">
                  Product {getSortIcon('product')}
                </div>
              </th>
              <th 
                className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('amount')}
              >
                <div className="flex items-center">
                  Amount {getSortIcon('amount')}
                </div>
              </th>
              <th 
                className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('status')}
              >
                <div className="flex items-center">
                  Status {getSortIcon('status')}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-50">
                <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  #{transaction.id}
                </td>
                <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{transaction.customer}</div>
                </td>
                <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {transaction.date}
                </td>
                <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">
                  {transaction.product}
                </td>
                <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                  ${transaction.amount.toFixed(2)}
                </td>
                <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(transaction.status)}`}>
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
