import React from "react";

function AdminPage() {
  return(
    <>
      <section className=" h-screen w-full bg-primaryDark flex justify-center items-center px-8 font-rubik ">
        <form action="" className=" text-primaryWhite w-full max-w-[400px] md:max-w-[350px] flex flex-col gap-5 items-center justify-center ">
          <h1 className=" font-bold text-textLG uppercase">Sign In</h1>
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col w-full">
              <label htmlFor="email">Email</label>
              <input className=" h-10 rounded-xl p-1 border border-primaryWhite  bg-primaryDark " type="text" id="email" />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="password">Password</label>
              <input className=" h-10 rounded-xl p-1  border border-primaryWhite bg-primaryDark " type="password" id="password" />
            </div>
          </div>
          <button type="submit" className="lg:hover:hoverShadow w-3/4 btn flex items-center justify-center mt-4 lg:hover:scale-105 duration-300 font-medium h-10 ">Sign In</button>

        </form>
      </section>
    </>
  )
}

export default AdminPage;