import React from 'react';
import './index.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import About from './components/main/About/About';
import Project from './components/main/Projects/Projects.jsx';
import HomePage from './components/main/Home/home.jsx';
import Contact from './components/main/Contact/Contact';

import Admin from './components/main/Admin/Admin'


function App() {
  return (
    <BrowserRouter>
      <div className="m-0 flex w-screen flex-col md:flex-row scroll-smooth ">
        <Header />
        <div id="main" className="md:fixedWidth flex h-full w-full flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/about" element={<About />} exact />
            <Route path="/projects" element={<Project />} exact />
            <Route path="/contact" element={<Contact />} exact />
            <Route path="/admin" element={<Admin />} exact />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
