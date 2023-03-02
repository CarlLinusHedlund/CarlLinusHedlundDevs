import React, { useState } from 'react';
import DashboardViewLists from './DashboardGetProjects';
import DashboardHeader from './DashboardHeader';
import DashboardMakeList from './DashboardMakeList';

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
      <div className="z-30 h-full w-full">
        <DashboardHeader
          handleMakePost={handleMakePost}
          // handleMakePostDesktop={handleMakePostDesktop}
          // handleViewPostsDesktop={handleViewPostsDesktop}
          handleViewPosts={handleViewPosts}
        />
      </div>
      <div className=" flex h-full w-full justify-center ">
        {showMakeList ? <DashboardViewLists /> : <DashboardMakeList />}
      </div>
    </>
  );
}

export default Dashboard;
