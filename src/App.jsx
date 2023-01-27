import './index.css';

function App() {
  return (
    <div className="App bg-primaryDark h-screen">
      <div className='header px-8 md:px-0 md:py-10 fixed top-0 left-0 w-full flex flex-row justify-between h-[90px] border-b border-[#2c2c2c] md:h-screen md:w-[110px] md:flex-col-reverse md:border-r'>
        <div className='text-primaryWhite flex justify-center items-center'>
          Logo
        </div>
        <div className='menu flex justify-center items-center'>
          <div id='menu-btn' className='bg-primaryWhite h-0.5 w-[25px] relative rounded-lg after:w-[20px] after:h-0.5 after:absolute after:rounded-lg after:top-2 after:bg-white before:w-[30PX] before:h-0.5 before:bg-white before:rounded-lg before:absolute before:bottom-2'>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
