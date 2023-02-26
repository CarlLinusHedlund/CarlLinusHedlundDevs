import React from 'react';
import { SignOut } from '../auth/SignOut';

function DashboardHeader() {
  return (
    <>
      <div className="sticky hidden h-24 w-full justify-center border-b border-[#2c2c2c] md:flex ">
        <div className=" flex h-full w-full max-w-5xl items-center justify-between px-4">
          <div className="flex h-full items-center gap-10">
            <div className=" h-fit w-fit ">
              <p className=" duration-300 text-textBASE font-rubik font-semibold text-primaryWhite  ">MAKE A POST</p>
            </div>
            <div className=" h-fit w-fit">
              <p className=" duration-300 text-textBASE font-rubik font-semibold text-primaryWhite  ">VIEW POSTS</p>
            </div>
          </div>
          <div
            onClick={SignOut}
            className="cursor-pointer rounded-md border border-primaryCoral py-1 px-8 duration-200 hover:scale-105 "
          >
            <p className=" text-textXS text-primaryWhite ">SIGN OUT</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between md:hidden rounded-t-[50px] fixed bottom-0 w-full bg-[#242424] h-20 px-14 xs:px-20 ">
        <div className=" h-fit w-fit ">
          <img className="w-7 h-7" src="../viewlists.svg" alt="" />
        </div>
        <div className=" relative h-20 w-20">
          <div className=" w-20 h-20 flex justify-center items-center rounded-full bg-primaryCoral absolute -top-5 ">
            <img className="w-8 h-8" src="../plus.svg" alt="" />
          </div>
        </div>
        <div className=" h-fit w-fit">
          <img className="w-7 h-7" src="../signout.svg" alt="" />
        </div>
      </div>
    </>
  );
}

export default DashboardHeader;
