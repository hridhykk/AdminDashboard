import { useContext, useState } from 'react';
import SidebarContext from './SidebarContext';
import { Package, Users, DollarSign, Filter, X } from 'lucide-react';

export default function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Package size={18} /> },
    { id: 'users', label: 'Users', icon: <Users size={18} /> },
    { id: 'transactions', label: 'Transactions', icon: <DollarSign size={18} /> },
    { id: 'settings', label: 'Settings', icon: <Filter size={18} /> },
  ];

  return (
    <aside
      className={`bg-gray-800 text-white fixed inset-y-0 left-0 z-30 transition-all duration-300 w-64 overflow-y-auto ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 ${!sidebarOpen && 'md:w-16'}`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h2 className={`text-xl font-bold ${!sidebarOpen && 'md:hidden'}`}>Admin Panel</h2>
        {sidebarOpen && (
          <button className="text-gray-400 md:hidden" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        )}
      </div>
      <nav className="mt-6">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                className={`flex items-center w-full p-3 text-left transition-colors duration-200 ${
                  activeItem === item.id ? 'bg-blue-600' : 'hover:bg-gray-700'
                }`}
                onClick={() => setActiveItem(item.id)}
              >
                <span className="mr-3">{item.icon}</span>
                <span className={`${!sidebarOpen && 'md:hidden'}`}>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
