import React from 'react';
import './index.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import AboutPage from './components/main/about';
import ContactPage from './components/main/contact';
import ProjectPage from './components/main/projects';
import HomePage from './components/main';

function App() {
  return (
    <BrowserRouter>
      <div className="m-0 flex w-screen flex-col md:flex-row">
        <Header />
        <div id="main" className="md:fixedWidth flex h-full w-full flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
