import React, { useState } from 'react';
import AuthPage from './components/AuthPage';
import { DashboardLayout } from 'em-ui-library';
import 'em-ui-library/dist/index.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {!isLoggedIn ? (
        <AuthPage onLoginSuccess={handleLoginSuccess} />
      ) : (
        <DashboardLayout user={user} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
