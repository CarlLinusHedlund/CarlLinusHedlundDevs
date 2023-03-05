import React, { useContext } from 'react';
import { UserContext } from './auth/userContext';
import SignIn from './components/signIn';
import Dashboard from './components/dashboard';

function AdminPage() {
  const { user } = useContext(UserContext);
  return (
    <section className=" min-h-screen w-full bg-primaryDark font-rubik ">
      {user ? <Dashboard /> : <SignIn />}
    </section>
  );
}

export default AdminPage;
