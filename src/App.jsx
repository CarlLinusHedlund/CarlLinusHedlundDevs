import React, { useState, useEffect } from 'react';
import './index.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import AboutPage from './components/main/about';
import ContactPage from './components/main/contact';
import ProjectPage from './components/main/projects';
import AdminPage from './components/main/admin';
import HomePage from './components/main/home';
import { UserContext } from './components/main/admin/auth/userContext';
import { supabase } from './supabase';

function App() {
  const [user, setUser] = useState(null);

  // Calls supabase for session. Either retrives a null or session with token and user details
  const checkLoggedIn = async () => {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      setUser(null);
      console.log(error);
    } if (data) {
      setUser(data.session.user);
    }
  };

  // Calls function checkLoggedIn() to se if user is logged in on page reload
  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
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
    </UserContext.Provider>

  );
}
export default App;
