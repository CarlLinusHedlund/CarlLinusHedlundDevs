import React, { useContext } from 'react';
import { UserContext } from './auth/UserContext';
import SignIn from './components/SignIn';
import Dashboard from './components/dashboard';

function AdminPage() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <section className=" min-h-screen w-full bg-primaryDark font-rubik ">
      {user ? <Dashboard /> : <SignIn />}
    </section>
  );
}

export default AdminPage;
