import React, { useContext, useState } from 'react';
import { headerContext } from '../utils/context';
import DashboardViewLists from './DashboardGetProjects';
import DashboardHeader from './DashboardHeader';
import DashboardMakeList from './DashboardMakeList';

function Dashboard() {
  const [showMakeList, setShowMakeList] = useState(false);
  const { setActiveHeader } = useContext(headerContext);
  function handleMakePost() {
    setShowMakeList(false);
    setActiveHeader(true);
  }

  function handleViewPosts() {
    setShowMakeList(true);
    setActiveHeader(false);
  }

  return (
    <>
      <div className="z-30 h-full w-full">
        <DashboardHeader
          handleMakePost={handleMakePost}
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
