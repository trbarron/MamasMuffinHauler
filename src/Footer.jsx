import logo from './logo.svg';


function Footer() {
    return (
      <div className="w-full h-20 bg-toast-600 flex place-self-end text-body align-center place-contents-center justify-center ">
        {/* <img src={logo} className='aspect-auto h-20 py-2 place-self-end' alt='logo of a truck' /> */}
        <div className='font-body text-white my-auto place-self-start pl-4'>
            <div className='text-center'>
                Made with love from Fall City, WA
            </div>
            <div className='text-center'>
                V1.0.3
            </div>            
        </div>
      </div>
    );
  }

  export default Footer;
