import React from 'react';
import './index.css';
import Menu from "./components/header/Nav";
import Logo from "./components/header/Logo"
import Dropdown from './components/header/MenuDropdown'
import Herosection from './components/main/herobanner'


function App() {
  return (
    <div className="flex flex-col md:flex-row w-screen m-0">
      <div id='header' className="bg-primaryDark z-20 px-8 md:px-0 md:py-12 sticky top-0 bottom-0 w-full h-[90px] border-b border-[#2c2c2c] md:h-screen md:w-[110px] md:border-r md:border-b-0">
        <div className='w-full h-full flex flex-row justify-between items-center md:flex-col-reverse'>
          <Logo/>
          <Menu/>
        </div>
      </div>
      
      <div id='main' className='w-full md:fixedWidth h-full flex flex-col'>
        <Dropdown />
        <Herosection/>
      </div>
      
    </div>
  );
}

export default App;
