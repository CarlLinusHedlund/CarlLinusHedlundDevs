import React, { useContext } from 'react';

import { SignOut } from '../main/admin/auth/SignOut';
import { UserContext } from '../main/admin/auth/UserContext';

function LogOut() {
  const { user } = useContext(UserContext);
  return (
    <div className=" mb-20 h-fit w-full flex justify-center ">
      <p onClick={SignOut} className={user ? 'text-primaryWhite lg:hidden cursor-pointer flex items-center justify-center mb-40 w-fit py-3 px-20 border rounded-lg border-primaryCoral font-rubik font-semibold ' : 'hidden'}>
        {user ? 'Sign Out' : ''}
      </p>
    </div>

  );
}

export default LogOut;
