import Navbar from './Navbar';
import Footer from './Footer';
import photo1 from './assets/photo1.jpg'
import photo2 from './assets/photo2.jpg'
import photo3 from './assets/photo3.jpg'
import photo4 from './assets/photo4.jpg'
import photo5 from './assets/photo5.jpg'
import photo6 from './assets/photo6.jpg'
import photo7 from './assets/photo7.jpg'

function Photos() {
  return (
    <div className='min-h-screen w-screen bg-toast-500 grid grid-cols-1	'>
        <Navbar />
        <div>
          <img src={photo1} className='aspect-auto m-auto lg:max-w-2xl py-4' alt='logo of a truck' />
          <img src={photo2} className='aspect-auto m-auto lg:max-w-2xl py-4' alt='logo of a truck' />
          <img src={photo3} className='aspect-auto m-auto lg:max-w-2xl py-4' alt='logo of a truck' />
          <img src={photo4} className='aspect-auto m-auto lg:max-w-2xl py-4' alt='logo of a truck' />
          <img src={photo5} className='aspect-auto m-auto lg:max-w-2xl py-4' alt='logo of a truck' />
          <img src={photo6} className='aspect-auto m-auto lg:max-w-2xl py-4' alt='logo of a truck' />
          <img src={photo7} className='aspect-auto m-auto lg:max-w-2xl py-4' alt='logo of a truck' />

        </div>
        <Footer />
    </div>
  );
}

export default Photos;
