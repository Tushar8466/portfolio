import React from 'react'

function Navbar() {
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/50 backdrop-blur-md py-4 flex justify-around items-center'>
        <div className='text-white text-2xl font-bold p-3'>PORTFOLIO<span className='text-purple-500'>.</span></div>
        <div className='flex gap-8'>
            <a href='#' className='text-white text-sm uppercase tracking-widest hover:text-purple-400 transition-colors'>Home</a>
            <a href='#' className='text-white text-sm uppercase tracking-widest hover:text-purple-400 transition-colors'>Projects</a>
            <a href='#' className='text-white text-sm uppercase tracking-widest hover:text-purple-400 transition-colors'>About</a>
            <a href='#' className='text-white text-sm uppercase tracking-widest hover:text-purple-400 transition-colors'>Contact</a>
        </div>
    </nav>
  )
}

export default Navbar