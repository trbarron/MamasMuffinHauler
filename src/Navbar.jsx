function Navbar() {
    return (
      <div className="w-full h-20 bg-toast-600 flex">
        <a href="/" className="rounded px-6 flex-none grid grid-cols-1 content-center justify-center place-content-center hover:bg-toast-400 text-white">
            <div className="text-xl font-body ">
                Home
            </div>
            {/* <div className="place-self-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </div> */}
        </a>
        <div className="flex-1"></div>
        <a href="/About" className="rounded px-6 flex-none grid grid-cols-1 content-center justify-center place-content-center hover:bg-toast-400 text-white">
            <div className="text-xl font-body ">
                About
            </div>
            {/* <div className="place-self-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
            </div> */}
        </a>
        <a href="/Contact" className="rounded px-6 flex-none grid grid-cols-1 content-center justify-center place-content-center hover:bg-toast-400 text-white">
            <div className="text-xl font-body ">
                Contact
            </div>
            {/* <div className="place-self-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                </svg>
            </div> */}
        </a>

      </div>
    );
  }

  export default Navbar;
