import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '@/contexts/AuthContext';

type PrivateRouteProps = {
  element: JSX.Element;
};

function PrivateRoute({ element }: PrivateRouteProps) {
  const { loading, authenticated } = useContext(AuthContext);

  if (loading) return <div>Carregando...</div>;

  return authenticated ? element : <Navigate to="/signin" />;
}

export default PrivateRoute;
