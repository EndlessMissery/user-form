import React, { useState } from 'react';
import api from '../api/axios';

const RegisterForm = ({ onToggle }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('❌ Hesla se neshodují');
      return;
    }

    try {
      const response = await api.post('/register', { email, password });
      setMessage(`✅ Registrace úspěšná! Token: ${response.data.token}`);
    } catch (error) {
      setMessage(`❌ ${error.response?.data?.error || 'Chyba registrace'}`);
    }
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4">
      <h2 className="text-xl font-semibold">Registrace</h2>
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
      <input
        type="password"
        placeholder="Potvrď heslo"
        className="w-full p-2 border rounded"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
        Registrovat
      </button>
      <p className="text-sm text-center">
        Už máš účet?{' '}
        <button
          type="button"
          onClick={onToggle}
          className="text-blue-600 underline"
        >
          Přihlas se
        </button>
      </p>
      {message && <div className="text-sm text-red-600 mt-2">{message}</div>}
    </form>
  );
};

export default RegisterForm;
