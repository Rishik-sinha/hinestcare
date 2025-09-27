import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import './index.css';
import { AuthProvider } from './context/AuthContext'; // Import the provider

const router = createBrowserRouter([
  // ... your router config remains the same
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
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
    <AuthProvider> {/* Wrap the app with the provider */}
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);