import React from 'react'
import logo1 from '../assets/img/logo-1.svg'
import logo2 from '../assets/img/logo-2.svg'
import logo3 from '../assets/img/logo-3.svg'
import logo4 from '../assets/img/logo-4.svg'
import logo5 from '../assets/img/logo-5.svg'

function Logo() {
    return (
        <div className='bg-black grid grid-cols-2 md:grid-cols-5 w-full py-16'>
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
            <img className='md:col-span-1 col-span-2 place-self-center ' src={logo5} alt="" />
        </div>
    )
}

export default Logo