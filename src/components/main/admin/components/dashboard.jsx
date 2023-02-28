import React, { useState } from 'react';
import DashboardViewLists from './dashboardGetProjects';
import DashboardHeader from './dashboardHeader';
import DashboardMakeList from './dashboardMakeList';

function Dashboard() {
  const [showMakeList, setShowMakeList] = useState(true);

  function handleMakePost() {
    setShowMakeList(true);
  }

  function handleViewPosts() {
    setShowMakeList(false);
  }

  return (
    <>
      <div className="w-full h-full">
        <DashboardHeader
          handleMakePost={handleMakePost}
          handleViewPosts={handleViewPosts}
        />
      </div>
      <div className=" w-full h-full flex justify-center ">
        {showMakeList ? <DashboardMakeList /> : <DashboardViewLists />}
      </div>
    </>
  );
}

export default Dashboard;
