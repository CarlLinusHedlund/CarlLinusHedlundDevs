import React from 'react';

export default function PageNotFound() {
  return (
    <div className=" flex min-h-screen w-full flex-col items-center justify-center bg-primaryDark ">
      <h1 className=" text-center font-rubik text-textXL font-semibold uppercase text-primaryWhite ">
        404 <br />
        Page Not Found!
      </h1>
      <img className="h-auto" src="../monster404.gif" alt="" />
    </div>
  );
}
