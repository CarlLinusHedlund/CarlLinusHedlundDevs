import React from 'react';

function dashboardMakeList() {
  return (
    <div className="flex flex-col lg:flex-col w-full h-fit px-8 py-14">
      <div className=" w-full lg:w-1/2 ">
        <form className=" w-full font-rubik flex flex-col ">
          <div className=" flex flex-col gap-4 font-semibold text-textBASE w-full h-full ">
            <h2 className=" text-primaryWhite capitalize ">Information</h2>
            <div className=" flex flex-col gap-1">
              <label htmlFor="title">Title</label>
              <input name="title" id="title" type="text" />
            </div>
            <div />
          </div>
          <div />
          <div />
        </form>
      </div>
      <div className=" bg-primaryDark lg:w-1/2 w-full p-44" />
    </div>
  );
}

export default dashboardMakeList;
