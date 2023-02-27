import React from 'react';
import Form from './makeAListForm';


function dashboardMakeList() {
  


  return (
    <div className="flex flex-col lg:flex-row w-full h-fit max-w-5xl">
      <div className=" py-10 w-full lg:w-1/2 lg:border-r border-[#2c2c2c] px-8 md:px-10">
        <Form />
      </div>
      <div className=" bg-primaryDark lg:w-1/2 w-full p-44" >
        Preview
      </div>    
    </div>
  );
}

export default dashboardMakeList;
