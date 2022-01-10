import React from 'react';

import Home from '@/pages/Home';
import SignIn from '@/pages/SignIn';

type RouteType = {
  key: string;
  path: string;
  element: JSX.Element;
  requireAuth: boolean;
};

const routes: RouteType[] = [
  {
    path: '/signin',
    key: 'signin',
    element: <SignIn />,
    requireAuth: false
  },
  {
    path: '/',
    key: 'home',
    element: <Home />,
    requireAuth: true
  }
];

export default routes;
