import React from 'react';

function dashboardMakeList() {
  return (
    <div className="flex flex-col lg:flex-row w-full h-fit max-w-5xl">
      <div className=" py-10 w-full lg:w-1/2 lg:border-r border-[#2c2c2c] px-8 md:px-10">
        <form className=" w-full font-rubik flex flex-col gap-10 ">
          <div className=" flex flex-col gap-14 font-semibold text-textBASE w-full h-full ">
            <h2 className=" text-primaryWhite capitalize text-textLG ">Information</h2>
            <div  className='w-full h-full flex flex-col gap-5'>
              <div className=" flex flex-col gap-1">
                <label htmlFor="title" className='text-primaryWhite text-textBASE font-normal'>Title</label>
                <input className=' font-medium rounded-lg focus:scale-105 duration-300 focus:outline-none px-2 py-3' name="title" id="title" type="text" />
              </div>
              <div className=" flex flex-col gap-1">
                <label htmlFor="course" className='text-primaryWhite text-textBASE font-normal'>Course</label>
                <input className=' font-medium rounded-lg focus:scale-105 duration-300 focus:outline-none px-2 py-3' name="course" id="course" type="text" />
              </div>
            </div>
            
            <div className=" flex flex-col gap-1">
              <label htmlFor="description" className='text-primaryWhite text-textBASE font-normal'>Description</label>
              <textarea className=' min-h-[200px] max-h-[200px] font-light rounded-lg focus:scale-105 duration-300 focus:outline-none px-2 py-3' name="description" id="title" />
            </div>
            <div className=" flex flex-col gap-1">
              <label htmlFor="progress" className='text-primaryWhite text-textBASE font-normal'>Progress</label>
              <textarea className=' min-h-[200px] max-h-[200px] font-light rounded-lg focus:scale-105 duration-300 focus:outline-none px-2 py-3' name="progress" id="progress" />
            </div>
            <div />
          </div>
          <div className=' flex flex-col gap-10 font-semibold text-textBASE w-full h-full '>
            <h2 className=" text-primaryWhite font-semibold capitalize text-textLG ">Options</h2>
            <div className=" flex flex-col gap-1">
              <label htmlFor="active" className='text-primaryWhite text-textBASE font-normal'>Active</label>
              <select className=' font-medium rounded-lg focus:scale-105 duration-300 focus:outline-none px-2 py-3' name="active" id="active" type="rad" >
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <div className=" flex flex-col gap-1">
              <label htmlFor="description" className='text-primaryWhite text-textBASE font-normal'>Add Tags</label>
              <input placeholder='css, html, react' type="text" className=' font-light rounded-lg focus:scale-105 duration-300 focus:outline-none px-2 py-3' name="description" id="title" />
            </div>
          </div>
          
        </form>
      </div>
      <div className=" bg-primaryDark lg:w-1/2 w-full p-44" >
        Preview
      </div>    
    </div>
  );
}

export default dashboardMakeList;
