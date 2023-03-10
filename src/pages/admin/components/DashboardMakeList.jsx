import React from 'react';
import Form from './MakeAListForm';

function dashboardMakeList() {
  return (
    <div className="flex h-fit w-full max-w-5xl flex-col items-center lg:items-start">
      <div className=" w-full py-10  px-8 md:px-10">
        <Form />
      </div>
    </div>
  );
}

export default dashboardMakeList;
