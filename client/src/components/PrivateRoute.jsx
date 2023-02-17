import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function PrivateRoute() {
  const { auth } = useAuth();

  return auth === true ? <Outlet /> : <Navigate to="/auth" />;
}

export default PrivateRoute;
