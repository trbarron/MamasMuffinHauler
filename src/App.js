import logo from './assets/logo.png';
import Navbar from './Navbar';
import Footer from './Footer';
import truckImage from './assets/truckImage.jpg';

function App() {
  return (
    <div className='min-h-screen w-screen bg-toast-500 grid grid-cols-1	'>
        <Navbar />
        <img src={truckImage} className='aspect-auto m-auto lg:max-w-3xl' alt='logo of a truck' />
        <div>
          <div className='text-3xl lg:text-6xl 2xl:text-8xl text-center font-body text-white'>
            Mama's Muffin Hauler
          </div>
        </div>
        <img src={logo} className='aspect-auto m-auto max-w-[7rem]' alt='logo of a truck' />
        <Footer />
    </div>
  );
}

export default App;
