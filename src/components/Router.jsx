import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import AboutPage from '../pages/about/index';
import ContactPage from '../pages/contact/index';
import ProjectPage from '../pages/projects/index';
import AdminPage from '../pages/admin/index';
import HomePage from '../pages/home/index';
import ProjectDetails from '../pages/projects/components/ProjectDetails';
import PageNotFound from '../components/PageNotFound';

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/about" element={<AboutPage />} exact />
        <Route path="/projects" element={<ProjectPage />} exact />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/contact" element={<ContactPage />} exact />
        <Route path="/admin" element={<AdminPage />} exact />
        <Route path="*" element={<PageNotFound />} exact />
      </Routes>
    </AnimatePresence>
  );
}
