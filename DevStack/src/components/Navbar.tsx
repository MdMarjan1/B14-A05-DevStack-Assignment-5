import logo from "../assets/logo-text.png"

const Navbar = () => {
  return (
    <nav className="bg-base-100 shadow-sm sticky">
        <div className="navbar container mx-auto">
        {/* navbar start */}
        <div className="navbar-start">
            {/* navbar logo */}
            <div className="navbar-logo hidden md:block">
                <img src={logo} alt="logo" />
            </div>


            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle md:hidden">
                <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
            </div>
            <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                 <li><a href="#">Home</a></li>
                 <li><a href="#">Technologies</a></li>
                 <li><a href="#">Projects</a></li>
                 <li><a href="#">About</a></li>
                 <li><a href="#">Contact</a></li>
            </ul>
            </div>
        </div>
        {/* navbar center */}
        <div className="navbar-center">
            {/* navbar mobile logo */}
            <div className="block -ml-2 w-[80%] md:hidden">
                <img src={logo} alt="" />
            </div>
        
            <ul className="hidden md:flex md:gap-6 gap-9">
              <li><a href="#" className="text-[#DB2777]">Home</a></li>
              <li><a href="#">Technologies</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
        </div>

        {/*navbar- end */}
        <div className="navbar-end">
            <button className="btn mr-1.5 md:mr-4 border-0 bg-white  text-[0.8rem] md:text-[1rem]">Sign in</button>
            <button className="btn bg-[#DB2777] text-white text-[0.7rem] md:text-[1rem]">Sign Up</button>
        </div>
    </div>
   
    </nav>
  );
};

export default Navbar;
