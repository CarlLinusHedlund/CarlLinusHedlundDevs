import React from 'react';
import './index.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import AboutPage from './components/main/about';
import ContactPage from './components/main/contact';
import ProjectPage from './components/main/projects';
import AdminPage from './components/main/admin';
import HomePage from './components/main/home';

function App() {
  return (
    <BrowserRouter>
      <div className="m-0 flex w-screen flex-col scroll-smooth md:flex-row ">
        <Header />
        <div id="main" className="md:fixedWidth flex h-full w-full flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/about" element={<AboutPage />} exact />
            <Route path="/projects" element={<ProjectPage />} exact />
            <Route path="/contact" element={<ContactPage />} exact />
            <Route path="/admin" element={<AdminPage />} exact />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
