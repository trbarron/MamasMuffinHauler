import logo from './logoV1.png';

function App() {
  return (
    <div className='h-screen w-screen bg-[#ff7d68] grid grid-cols-1	'>
        <img src={logo} className='aspect-auto m-auto lg:max-w-3xl' alt='logo of a truck' />
        <div>
          <div className='text-3xl lg:text-6xl text-center font-body text-white'>
            Mama's Muffin Hauler
          </div>
          <div className='text-xl lg:text-3xl text-center font-body text-white'>
            more details coming soon
          </div>
        </div>
    </div>
  );
}

export default App;
