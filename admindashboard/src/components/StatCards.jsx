import { DollarSign, Package, User } from 'lucide-react';

const dummyStats = {
  users: 1245,
  orders: 356,
  revenue: 28659.45,
};

export default function StatCards() {
  const stats = [
    {
      title: 'Total Users',
      value: dummyStats.users,
      icon: <User size={20} />,
      color: 'bg-blue-500',
    },
    {
      title: 'Total Orders',
      value: dummyStats.orders,
      icon: <Package size={20} />,
      color: 'bg-green-500',
    },
    {
      title: 'Total Revenue',
      value: `$${dummyStats.revenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
      icon: <DollarSign size={20} />,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex items-center">
          <div className={`${stat.color} p-3 rounded-full text-white mr-4`}>{stat.icon}</div>
          <div>
            <h3 className="text-gray-500 text-sm">{stat.title}</h3>
            <p className="text-xl sm:text-2xl font-bold">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
