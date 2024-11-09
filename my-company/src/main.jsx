import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App, { router } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
