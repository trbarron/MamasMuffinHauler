import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
  return (
    <div className='h-screen w-screen bg-blaze-orange-200 grid grid-cols-1	'>
        <Navbar />
        <div>
          <div className='text-3xl lg:text-6xl text-center font-body text-slate-900 lg:pb-8'>
          Contact
          </div>
          <div className='text-xl lg:text-3xl text-center pt-4 font-body text-slate-900 max-w-lg mx-auto'>
            more details coming soon. Example text here goes here more text here
            more details coming soon. Example text here goes here more text here
            more details coming soon. Example text here goes here more text here
            more details coming soon. Example text here goes here more text here
            more details coming soon. Example text here goes here more text here
            more details coming soon. Example text here goes here more text here
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default Contact;
