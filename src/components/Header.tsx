"use client"
import React, { useState } from 'react'
import { FiMenu,FiX } from 'react-icons/fi'

const Header = () => {
    const [show, setShow] = useState(false);

    const toggleMenu= () => {
        setShow((prev)=>!prev)
    }
  return (
      <header className=' bg-white sticky top-0 z-50'>
          <div className='h-15 max-w-6xl px-6 mx-auto flex justify-between items-center'>
              <p className='text-blue-700 text-2xl'>Softsell</p>
              <div className='flex gap-4 items-center justify-between'>
                  
               
                      <nav className='hidden md:flex items-center gap-4 text-l '>
                     
                          <a href="" className='hover:text-amber-400'>Home</a>
                    
                          <a href="" className='hover:text-amber-400'>How It  Works</a>
                          <a href="#why-us" className='hover:text-amber-400'>Why Us</a>
                          <a href="" className='hover:text-amber-400'>Testimonials</a>
                          <a href="" className='hover:text-amber-400'>Contact Us</a>
                      
                      </nav>
                
                  <button className='text-3xl md:hidden' onClick={toggleMenu}>{show? <FiX/> :<FiMenu/> } </button>
                  <span className='mx-auto'>Dark mode</span>
              </div>
          </div>
          {show && 
            <div className="md:hidden flex flex-col items-center bg-white border-t px-6 py-4 space-y-4">
            <a href="#hero" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600 hover:bg-amber-500 px-3 ">Home</a>
            <a href="#how-it-works" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">How It Works</a>
            <a href="#why-us" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Why Us</a>
            <a href="#testimonials" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Testimonials</a>
            <a href="#contact" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Contact</a>
          </div>  
          
          }
    </header>
  )
}

export default Header