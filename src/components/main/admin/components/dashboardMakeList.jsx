import React from 'react';
import Form from './makeAListForm';

function dashboardMakeList() {
  return (
    <div className="flex h-fit w-full max-w-5xl flex-col items-center lg:items-start">
      <div className=" w-full max-w-xl py-10  px-8 md:px-10">
        <Form />
      </div>
    </div>
  );
}

export default dashboardMakeList;
