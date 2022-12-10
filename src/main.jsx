import React from 'react'
import ReactDOM from "react-dom/client";
import App from './App'
import './index.css'
import { AuthProvider } from './context/AuthProvider';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Register from './Register.jsx';




const router = createBrowserRouter( [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
] );


const root = ReactDOM.createRoot( document.getElementById( "root" ) );
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
