import React, { createContext } from 'react';

import useAuth from '@/hooks/useAuth';
import AuthProps from '@/@types/AuthProps';

type AuthProviderProps = {
  children: JSX.Element;
};

const AuthContext = createContext<AuthProps>({} as AuthProps);

function AuthProvider({ children }: AuthProviderProps) {
  const { authenticated, loading, signin, signup, signout } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        loading,
        signin,
        signup,
        signout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
