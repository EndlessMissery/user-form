import React, { useState } from 'react';
import api from '../api/axios';

const LoginForm = ({ onToggle, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', { email, password });
      const mockUser = { name: email.split('@')[0] };
      setMessage(`✅ Přihlášení úspěšné! Token: ${response.data.token}`);
      onLoginSuccess(mockUser);
    } catch (error) {
      setMessage(`❌ ${error.response?.data?.error || 'Chyba přihlášení'}`);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <h2 className="text-xl font-semibold">Přihlášení</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Heslo"
        className="w-full p-2 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        Přihlásit se
      </button>
      <p className="text-sm text-center">
        Nemáš účet?{' '}
        <button
          type="button"
          onClick={onToggle}
          className="text-blue-600 underline"
        >
          Zaregistruj se
        </button>
      </p>
      {message && <div className="text-sm text-red-600 mt-2">{message}</div>}
    </form>
  );
};

export default LoginForm;
