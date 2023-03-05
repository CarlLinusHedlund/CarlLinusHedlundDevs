import React, { useContext } from 'react';
import { UserContext } from './utils/userContext';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';

function AdminPage() {
  const { user } = useContext(UserContext);
  return (
    <section className=" min-h-screen w-full bg-primaryDark font-rubik ">
      {user ? <Dashboard /> : <SignIn />}
    </section>
  );
}

export default AdminPage;
