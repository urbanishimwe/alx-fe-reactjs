import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Router } from './App'
import './index.css'

const root = createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={Router} />
);
