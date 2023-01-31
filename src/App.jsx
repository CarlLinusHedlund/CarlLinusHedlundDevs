import React from 'react';
import './index.css';
import Herosection from './components/main/herobanner';
import Header from './components/header/Header';

function App() {
  return (
    <div className="flex flex-col md:flex-row w-screen m-0">
      <Header />
      <div id="main" className="w-full md:fixedWidth h-full flex flex-col">
        <Herosection />
      </div>

    </div>
  );
}

export default App;
