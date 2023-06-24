function Navbar() {
    return (
      <div className="w-full h-20 bg-toast-600 flex">
        <a href="/" className="rounded px-6 flex-none grid grid-cols-1 content-center justify-center place-content-center hover:bg-toast-400 text-white">
            <div className="text-xl font-body ">
                Home
            </div>
        </a>
        <div className="flex-1"></div>
        <a href="/About" className="rounded px-6 flex-none grid grid-cols-1 content-center justify-center place-content-center hover:bg-toast-400 text-white">
            <div className="text-xl font-body ">
                About
            </div>
        </a>
        <a href="/Photos" className="rounded px-6 flex-none grid grid-cols-1 content-center justify-center place-content-center hover:bg-toast-400 text-white">
            <div className="text-xl font-body ">
                Photos
            </div>
        </a>
        <a href="/Contact" className="rounded px-6 flex-none grid grid-cols-1 content-center justify-center place-content-center hover:bg-toast-400 text-white">
            <div className="text-xl font-body ">
                Contact
            </div>
        </a>
      </div>
    );
  }

  export default Navbar;
