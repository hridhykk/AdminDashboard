import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import './index.css';
const App = () => {
  return (
    <Router>
            <main>
              <Routes>
                <Route path="/" element={<AdminDashboard/>} />
              </Routes>
            </main>
        
    </Router>
  );
};

export default App;