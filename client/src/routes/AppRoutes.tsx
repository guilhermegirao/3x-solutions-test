import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PrivateRoute from '@/components/PrivateRoute';
import NotFound from '@/pages/NotFound';

import routes from './routes';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {routes.map(({ key, path, element, requireAuth }) => (
          <Route
            key={key}
            path={path}
            element={
              !requireAuth ? element : <PrivateRoute element={element} />
            }
          />
        ))}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
