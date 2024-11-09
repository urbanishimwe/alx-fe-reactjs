import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from "./components/Home"
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route path='' element={<Home />} />
    <Route path='home' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='contact' element={<Contact />} />
    <Route path='services' element={<Services />} />
    <Route path='*' element={<h1> Not found </h1>} />
  </Route>
));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
