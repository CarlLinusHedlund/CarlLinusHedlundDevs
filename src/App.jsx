import React, { useState, useEffect } from 'react';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/index';
import { supabase } from './supabase';
import { headerContext } from './pages/admin/utils/context';
import { UserContext } from './pages/admin/utils/userContext';
import AnimatedRoutes from './components/Router';
import ScrollToTop from './pages/home/components/ScrollToTop';

function App() {
  const [user, setUser] = useState(null);
  const [activeHeader, setActiveHeader] = useState(true);

  // Calls supabase for session. Either retrives a null or session with token and user details
  const checkLoggedIn = async () => {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      setUser(null);
      console.log(error);
    }
    if (data) {
      setUser(data.session);
    }
  };

  // Calls function checkLoggedIn() to se if user is logged in on page reload
  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <headerContext.Provider value={{ activeHeader, setActiveHeader }}>
        <Router>
          <ScrollToTop />
          <div className="m-0 flex w-screen flex-col scroll-smooth md:flex-row ">
            <Header />
            <div
              id="main"
              className="md:fixedWidth flex h-full w-full flex-col bg-primaryDark"
            >
              <AnimatedRoutes />
            </div>
          </div>
        </Router>
      </headerContext.Provider>
    </UserContext.Provider>
  );
}
export default App;
