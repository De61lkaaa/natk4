// src/hooks/useAuth.js
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const useAuth = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const login = localStorage.getItem('login');
    const password = localStorage.getItem('password');

    if (login === 'Admin' && password === 'pswrd') {
      setIsAuthenticated(true);
    } else {
      router.push('/');
    }
    setLoading(false);
  }, [router]);

  return { isAuthenticated, loading };
};

export default useAuth;