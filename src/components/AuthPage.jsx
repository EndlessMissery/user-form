import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthPage = ({ onLoginSuccess }) => {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleForm = () => setIsRegistering(!isRegistering);

  return (
    <div className="w-full max-w-md p-6 bg-white rounded shadow">
      {isRegistering ? (
        <RegisterForm onToggle={toggleForm} />
      ) : (
        <LoginForm onToggle={toggleForm} onLoginSuccess={onLoginSuccess} />
      )}
    </div>
  );
};

export default AuthPage;
