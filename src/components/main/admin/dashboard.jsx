import React from 'react';
import DashboardHeader from './components/dashboardHeader';
import DashboardMakeList from './components/dashboardMakeList';

function Dashboard() {
  return (
    <>
      <div className="w-full h-full">
        <DashboardHeader />
      </div>
      <div className="  ">
        <DashboardMakeList />
      </div>
    </>
  );
}

export default Dashboard;
