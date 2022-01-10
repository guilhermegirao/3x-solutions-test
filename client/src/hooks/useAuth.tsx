import { useState, useEffect } from 'react';

import api from '@/utils/api';
import AuthProps from '@/@types/AuthProps';

function useAuth(): AuthProps {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('@3x-test/token');

    if (token) setAuthenticated(true);

    setLoading(false);
  }, []);

  async function signin(email: string, password: string) {
    return api
      .post('/signin', {
        email,
        password
      })
      .then(response => {
        if (response.data.token) {
          const { token } = response.data;

          localStorage.setItem('@3x-test/token', token);
          setAuthenticated(true);
        }

        return { data: response.data };
      });
  }

  async function signup(email: string, password: string, username: string) {
    return api
      .post('/signup', {
        email,
        password,
        username
      })
      .then(response => {
        if (response.data.token) {
          const { token } = response.data;

          localStorage.setItem('@3x-test/token', token);
          setAuthenticated(true);
        }

        return { data: response.data };
      });
  }

  function signout() {
    localStorage.removeItem('@3x-test/token');
    setAuthenticated(false);
  }

  return { authenticated, loading, signin, signup, signout };
}

export default useAuth;
