import { useState, useEffect } from 'react';
import SidebarContext from '../components/SidebarContext';
import TopNavBar from '../components/TopNavBar';
import Sidebar from '../components/Sidebar';
import StatCards from '../components/StatCards';
import TransactionsTable from '../components/TransactionsTable';
import AddUserModal from '../components/AddUserModal';
import { Plus } from 'lucide-react';

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };
    
    // Set initial state
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return (
    <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      <div className="flex flex-col h-screen bg-gray-100">
        <TopNavBar />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main
            className={`flex-1 overflow-y-auto transition-all duration-300 p-3 sm:p-4 ${
              sidebarOpen && windowWidth >= 768 ? 'md:ml-64' : sidebarOpen && windowWidth < 768 ? 'ml-0' : 'ml-0 md:ml-16'
            }`}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Dashboard Overview</h2>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center text-sm sm:text-base"
              >
                <Plus size={18} className="mr-1" /> Add User
              </button>
            </div>

            <StatCards />
            
            <div className="w-full">
              <TransactionsTable />
            </div>
          </main>
        </div>
        {isModalOpen && <AddUserModal onClose={() => setIsModalOpen(false)} />}
      </div>
    </SidebarContext.Provider>
  );
}