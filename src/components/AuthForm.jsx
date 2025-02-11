'use client';

import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

const AuthForm = ({ onLogin }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (login === 'Admin' && password === 'pswrd') {
      localStorage.setItem('login', login);
      localStorage.setItem('password', password);
    }
    onLogin(login, password);
  };

  return (
    <div className="relative w-full max-w-md p-8 bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-900 rounded-lg shadow-2xl">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-white drop-shadow-lg">
        Авторизация
      </h2>
      <div className="space-y-6">
        <Input
          type="text"
          placeholder="Логин"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          className="w-full px-4 py-3 border border-gray-500 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 border border-gray-500 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button
          onClick={handleSubmit}
          text="Войти"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all shadow-md"
        />
      </div>
    </div>
  );
};

export default AuthForm;