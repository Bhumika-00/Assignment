
import React, { useState } from 'react';
import { login } from '../api/api';
import { setToken as saveToken } from '../utils/auth';

import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({ email, password });
      saveToken(data.token);

      navigate('/users');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-96" onSubmit={handleLogin}>
        <h2 className="text-2xl mb-4">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border"
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border"
          placeholder="Password"
        />
        <button className="w-full bg-blue-500 text-white p-2">Login</button>
      </form>
    </div>
  );
};

export default Auth;
