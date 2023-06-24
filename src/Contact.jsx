import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
  return (
    <div className='min-h-screen w-screen bg-toast-500 grid grid-cols-1	'>
        <Navbar />
        <div>
          <div className='text-3xl lg:text-6xl text-center font-body text-white lg:pb-8'>
            Kathy Barron
          </div>
          <div className='text-xl lg:text-3xl text-center pt-4 font-body text-white max-w-lg mx-auto'>
            <a href="mailto:mamasmuffinhauler@gmail.com">mamasmuffinhauler@gmail.com</a>
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default Contact;
