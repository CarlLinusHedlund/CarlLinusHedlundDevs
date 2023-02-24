import React from 'react';
import Dashboard from './dashboard';
import SignIn from './SignIn';


function AdminPage() {
  return (
    <section className=" flex min-h-screen w-full items-center justify-center bg-primaryDark px-8 font-rubik ">
      <SignIn /> 
    </section>
  );
}

export default AdminPage;
