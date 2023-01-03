import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  console.log({accessToken: localStorage.getItem('accessToken')})
  if (!localStorage.getItem('accessToken')) {
    navigate('/login');
    return;
  }

  return <Outlet />;
}
