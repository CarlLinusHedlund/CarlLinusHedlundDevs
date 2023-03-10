import React, { useContext } from 'react';
import { UserContext } from './utils/userContext';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import { motion } from 'framer-motion';

function AdminPage() {
  const { user } = useContext(UserContext);
  return (
    <motion.section
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      className=" min-h-screen w-full bg-primaryDark font-rubik "
    >
      {user ? <Dashboard /> : <SignIn />}
    </motion.section>
  );
}

export default AdminPage;
