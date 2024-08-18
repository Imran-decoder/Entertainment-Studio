import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-slate-800 text-white list-none flex justify-between items-center p-4 hover:bg-transparent hover:text-black sticky'>
    <h1 className='font-sans font-bold size-18 text-2xl hover:text-3xl'>LuxeVista</h1>
    <nav className='flex space-x-8'>
        <Link to="/"><li><h1>HOME</h1></li></Link>
        <Link to="/movie"><li><h1>MOVIE</h1></li></Link>
        <Link to="/game"><li><h1>GAME</h1></li></Link>
        <Link to="/"><li><h1>LOGIN</h1></li></Link>
        <Link to="/"><li><h1>SIGN IN</h1></li></Link>
       
    </nav>
    </div>
  )
}

export default Navbar
