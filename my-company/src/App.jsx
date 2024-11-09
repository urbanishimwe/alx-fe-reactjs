import Navbar from './components/Navbar';
import Footer from './components/Footer';
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet } from 'react-router-dom';
import Home from "./components/Home"
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'

export const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route path='' element={<Home />} />
    <Route path='home' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='contact' element={<Contact />} />
    <Route path='services' element={<Services />} />
    <Route path='*' element={<h1> Not found </h1>} />
  </Route>
));

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
