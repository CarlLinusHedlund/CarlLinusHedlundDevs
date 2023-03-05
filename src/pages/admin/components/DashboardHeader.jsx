import React, { useContext, useState } from 'react';
import { SignOut } from '../auth/signOut';
import { headerContext } from '../utils/context';
function DashboardHeader(props) {
  const { activeHeader } = useContext(headerContext);
  return (
    <>
      <div className="sticky hidden h-24 w-full justify-center border-b border-[#2c2c2c] md:flex">
        <div className=" flex h-full w-full max-w-5xl items-center justify-between px-10">
          <div className="flex h-full items-center gap-10">
            <div className=" h-fit w-fit cursor-pointer ">
              <p
                onClick={props.handleMakePost}
                className={` font-rubik text-textSM font-semibold duration-300 ${
                  activeHeader
                    ? 'scale-110 text-primaryWhite opacity-100'
                    : 'scale-75 text-primaryWhite opacity-50 '
                } `}
              >
                MAKE A POST
              </p>
            </div>
            <div className=" h-fit w-fit cursor-pointer">
              <p
                onClick={props.handleViewPosts}
                className={`font-rubik text-textSM font-semibold text-primaryWhite duration-300  ${
                  activeHeader
                    ? 'scale-75 text-primaryWhite opacity-50 '
                    : 'scale-115 text-primaryWhite opacity-100'
                } `}
              >
                VIEW POSTS
              </p>
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
      <div className="fixed bottom-0 z-40 flex h-20 w-full items-center justify-between rounded-t-[50px] bg-[#242424] px-14 xs:px-20 md:hidden ">
        <div onClick={props.handleViewPosts} className=" h-fit w-fit ">
          <img
            className="h-7 w-7"
            src="../viewlists.svg"
            alt="view lists icon"
          />
        </div>
        <div className=" relative h-20 w-20">
          <div
            onClick={props.handleMakePost}
            className=" absolute -top-5 flex h-20 w-20 items-center justify-center rounded-full bg-primaryCoral "
          >
            <img className="h-8 w-8" src="../plus.svg" alt="makeAList icon" />
          </div>
        </div>
        <div onClick={SignOut} className=" h-fit w-fit">
          <img className="h-7 w-7" src="../signout.svg" alt="signout" />
        </div>
      </div>
    </>
  );
}

export default DashboardHeader;
