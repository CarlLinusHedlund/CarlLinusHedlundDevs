import React, { useState } from 'react';
import DashboardViewLists from './dashboardGetProjects';
import DashboardHeader from './dashboardHeader';
import DashboardMakeList from './dashboardMakeList';

function Dashboard() {
  const [showMakeList, setShowMakeList] = useState(false);

  function handleMakePost() {
    setShowMakeList(false);
  }

  function handleViewPosts() {
    setShowMakeList(true);
  }

  return (
    <>
      <div className="w-full h-full z-30">
        <DashboardHeader
          handleMakePost={handleMakePost}
          // handleMakePostDesktop={handleMakePostDesktop}
          // handleViewPostsDesktop={handleViewPostsDesktop}
          handleViewPosts={handleViewPosts}
        />
      </div>
      <div className=" w-full h-full flex justify-center ">
        {showMakeList ? <DashboardViewLists /> : <DashboardMakeList />}
      </div>
    </>
  );
}

export default Dashboard;
