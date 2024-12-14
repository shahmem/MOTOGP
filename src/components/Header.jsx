import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/motogp.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {
    const[isOpen,setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const togglerBtn = () =>{
        setIsOpen(!isOpen);
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
          }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);
    return (
        <>
            <nav className='absolute w-full'>
                <div className='px-6 md:px-24 md:pr-16 py-6 flex'>
                    <div className='flex-1'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='capitalize font-semibold text-lg  pt-1.5  space-x-7 md:flex md:flex-row hidden '>
                        <Link className='px-3 text-[#ffffffaa] hover:text-white  focus:text-white' aria-current='true' to='/'>Home</Link>
                        <Link className='px-3 text-[#ffffffaa] hover:text-white  focus:text-white' to='/works'>Works</Link>
                        <Link className='px-3 text-[#ffffffaa] hover:text-white  focus:text-white' to='/services'>Services</Link>
                        <Link className='px-3 text-[#ffffffaa] hover:text-white  focus:text-white' to='/about'>About</Link>
                        <Link className='px-3 text-[#ffffffaa] hover:text-white  focus:text-white' to='/contact'> Contact Us</Link>
                    </div>
                    <a href="#" className='uppercase mx-9 border-2 border-[#b6e925] text-[#b6e925] px-5 text-sm py-2 font-bold hidden md:block hover:bg-[#b6e925] hover:text-black'>let's talk</a>
                    <button className='md:hidden' onClick={togglerBtn}>
                     {isOpen ? '' : <FontAwesomeIcon icon={faBars} style={{color: "#b6e925",}} />}
                    </button>
                </div>
                <div ref={menuRef} className={`md:hidden fixed right-0 top-0 h-screen w-48 bg-[#191919] text-white mt-[-8px] transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <nav className="flex flex-col space-y-4 uppercase font-semibold text-sm  mx-8 mt-28 ">
                    <Link className='px-3 text-[#ffffffaa] hover:text-white  focus:text-white' aria-current='true' onClick={() => setIsOpen(false)} to='/'>Home</Link>
                        <Link className='px-3 text-[#ffffffaa] hover:text-white  focus:text-white' onClick={() => setIsOpen(false)} to='/works'>Works</Link>
                        <Link className='px-3 text-[#ffffffaa] hover:text-white  focus:text-white' onClick={() => setIsOpen(false)} to='/services'>Services</Link>
                        <Link className='px-3 text-[#ffffffaa] hover:text-white  focus:text-white' onClick={() => setIsOpen(false)} to='/about'>About</Link>
                        <Link className='px-3 text-[#ffffffaa] hover:text-white  focus:text-white' onClick={() => setIsOpen(false)} to='/contact'> Contact Us</Link>
                    </nav>
                </div>
            </nav>
        </>
    )
}

export default Header