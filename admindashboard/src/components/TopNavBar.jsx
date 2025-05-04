import { useContext } from 'react';
import { Menu, Bell, Search } from 'lucide-react';
import SidebarContext from './SidebarContext';

export default function TopNavBar() {
  const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);

  return (
    <header className="bg-white shadow-sm py-4 px-4 sm:px-6 flex items-center justify-between z-10 sticky top-0">
      <div className="flex items-center">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-gray-600 focus:outline-none mr-4"
          aria-label="Toggle sidebar"
        >
          <Menu size={24} />
        </button>
        <h1 className="text-lg sm:text-xl font-bold text-gray-800 truncate">Levitating Elephant</h1>
      </div>
      <div className="flex items-center">
        <div className="relative mr-2 sm:mr-4 hidden sm:block">
          <input
            type="text"
            placeholder="Search..."
            className="py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full max-w-xs"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
        <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full mr-2">
          <Bell size={20} />
          <span className="absolute top-1 right-1 bg-red-500 rounded-full w-2 h-2"></span>
        </button>
        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
          HR
        </div>
      </div>
    </header>
  );
}