import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/responsive.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='bg-slate-800 text-white list-none flex justify-between items-center p-4 hover:bg-transparent hover:text-black sticky'>
      <h1 className='font-sans font-bold size-18 text-2xl hover:text-3xl'>LuxeVista</h1>
      
      <div className='hamburger-menu' onClick={toggleMobileMenu}>
        &#9776;
      </div>

      <nav className={`menu ${isMobileMenuOpen ? 'mobile-nav active' : ''}`}>
        <Link to="/"><li><h1>HOME</h1></li></Link>
        <Link to="/movie"><li><h1>MOVIE</h1></li></Link>
        <Link to="/game"><li><h1>GAME</h1></li></Link>
        {/* <Link to=""><li><h1>LOGIN</h1></li></Link>
        <Link to=""><li><h1>SIGN IN</h1></li></Link> */}
      </nav>
    </div>
  );
}

export default Navbar;
