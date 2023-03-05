import React, { useState, useEffect } from 'react';
import './index.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import AboutPage from './pages/about/index';
import ContactPage from './pages/contact/index';
import ProjectPage from './pages/projects/index';
import AdminPage from './pages/admin/index';
import HomePage from './pages/home';
import { UserContext } from './pages/admin/auth/userContext';
import { supabase } from './supabase';
import { headerContext } from './pages/admin/utils/context';

function App() {
  const [user, setUser] = useState(null);
  const [activeHeader, setActiveHeader] = useState(true);
  console.log(activeHeader);

  // Calls supabase for session. Either retrives a null or session with token and user details
  const checkLoggedIn = async () => {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      setUser(null);
      console.log(error);
    }
    if (data) {
      setUser(data.session.user);
    }
  };

  // Calls function checkLoggedIn() to se if user is logged in on page reload
  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <headerContext.Provider value={{ activeHeader, setActiveHeader }}>
        <BrowserRouter>
          <div className="m-0 flex w-screen flex-col scroll-smooth md:flex-row ">
            <Header />
            <div
              id="main"
              className="md:fixedWidth flex h-full w-full flex-col"
            >
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
      </headerContext.Provider>
    </UserContext.Provider>
  );
}
export default App;
