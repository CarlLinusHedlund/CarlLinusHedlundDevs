import React, { useContext } from 'react';

import { SignOut } from '../main/Admin/Auth/SignOut';
import { UserContext } from '../main/Admin/Auth/UserContext';

function LogOut() {
  const { user } = useContext(UserContext);
  return (
    <div className=" mb-20 flex h-fit w-full justify-center ">
      <p
        onClick={SignOut}
        className={
          user
            ? 'mb-40 flex w-fit cursor-pointer items-center justify-center rounded-lg border border-primaryCoral py-3 px-20 font-rubik font-semibold text-primaryWhite lg:hidden '
            : 'hidden'
        }
      >
        {user ? 'Sign Out' : ''}
      </p>
    </div>
  );
}

export default LogOut;
