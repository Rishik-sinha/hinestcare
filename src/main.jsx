import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import ErrorPage from './pages/ErrorPage'; // 1. Import your new error page
import { AuthProvider } from './context/AuthContext';
import './index.css';

// 2. Restructure the router
const router = createHashRouter([
  {
    element: <App />, // The App component is now the layout route
    errorElement: <ErrorPage />, // This handles all errors for its children
    children: [
      {
        path: '/', // The homepage is now a direct child
        element: <HomePage />,
      },
      {
        path: 'service/:serviceName',
        element: <ServicePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);