import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from '../components/Head'

function Contact() {
  return (
    <>
    <Header />
    <Head id="Contact"/>
    <div className='bg-black py-16'>
        <div className='md:w-[75%] px-4 md:px-28  text-white flex flex-col gap-8'>
            <h1 className='text-4xl font-bold'>Send Us a Message</h1>  
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sit quasi voluptatum repudiandae hic, exercitationem similique labore nulla expedita accusantium autem totam quod doloremque, nostrum minus facere libero quia praesentium.</p>
            <input type="text" className='p-2 h-10' placeholder='Full name'/>  
            <input type="text" className='p-2 h-10' placeholder='Email Address'/>  
            <input type="text" className='p-3 h-20'  placeholder='Your message'/> 
            <a className='uppercase w-max border-2 border-[#b6e925] text-[#b6e925] px-5 text-sm py-2 font-bold hover:bg-[#b6e925] hover:text-black' href="/submit">SEND MESSAGE</a> 
        </div>
    </div>
    

    <Footer/>
    </>
  )
}

export default Contact