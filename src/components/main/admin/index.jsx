import React from 'react';

function AdminPage() {
  return (
    <section className=" flex h-screen w-full items-center justify-center bg-primaryDark px-8 font-rubik ">
      <form
        action=""
        className=" flex w-full max-w-[400px] flex-col items-center justify-center gap-5 text-primaryWhite md:max-w-[350px] "
      >
        <h1 className=" text-textLG font-bold uppercase">Sign In</h1>
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full flex-col">
            <label htmlFor="email">Email</label>
            <input
              className=" h-10 rounded-xl border border-primaryWhite bg-primaryDark  p-1 "
              type="text"
              id="email"
            />
          </div>
          <div className="flex w-full flex-col">
            <label htmlFor="password">Password</label>
            <input
              className=" h-10 rounded-xl border  border-primaryWhite bg-primaryDark p-1 "
              type="password"
              id="password"
            />
          </div>
        </div>
        <button
          type="submit"
          className="lg:hover:hoverShadow btn mt-4 flex h-10 w-3/4 items-center justify-center font-medium duration-300 lg:hover:scale-105 "
        >
          Sign In
        </button>
      </form>
    </section>
  );
}

export default AdminPage;
