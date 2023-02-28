import React from 'react';
import Form from './makeAListForm';

function dashboardMakeList() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-full h-fit max-w-5xl">
      <div className=" py-10 w-full max-w-xl  px-8 md:px-10">
        <Form />
      </div>
    </div>
  );
}

export default dashboardMakeList;
