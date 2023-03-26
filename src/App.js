import logo from './logo.svg';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div className='h-screen w-screen bg-toast-500 grid grid-cols-1	'>
        <Navbar />
        <img src={logo} className='aspect-auto m-auto lg:max-w-3xl' alt='logo of a truck' />
        <div>
          <div className='text-3xl lg:text-8xl text-center font-body text-white'>
            Mama's Muffin Hauler
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default App;
