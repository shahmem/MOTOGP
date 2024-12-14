import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import img1 from '../assets/img/img1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassEnd, faMoneyBillWave, faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import img2 from '../assets/img/work-1.jpg'
import img3 from '../assets/img/work-2.jpg'
import img4 from '../assets/img/work-3.jpg'
import img5 from '../assets/img/work-4.jpg'
import img6 from '../assets/img/work-5.jpg'
import img7 from '../assets/img/work-6.jpg'
import Builder from '../components/Builder'
import Head from '../components/Head'

function Works() {
    return (
        <>
            <Header />
            <div>
                <Head id="Works"/>
                <div className='flex flex-col md:flex-row bg-black text-white py-12 px-4 md:px-16 gap-12'>
                    <img className='md:w-[66%]' src={img1} alt="" />
                    <div className='space-y-6 font-semibold'>
                        <p className='text-[#b6e925] font-bold text-xs'>Featured Work</p>
                        <h2 className='text-4xl font-bold tracking-tight'>SED MORBI NISL​</h2>
                        <p>Vitae nec mauris nec arcu commodo, sed pellentesque massa hendrerit.</p>
                        <ul className='space-y-3 '>
                            <li><FontAwesomeIcon icon={faMotorcycle} style={{ color: "#b6e925", }} />&nbsp; RX Feugiat 2000​</li>
                            <li><FontAwesomeIcon icon={faHourglassEnd} style={{ color: "#b6e925", }} />&nbsp; &nbsp;4-5 months</li>
                            <li><FontAwesomeIcon icon={faMoneyBillWave} style={{ color: "#b6e925", }} />&nbsp;&nbsp;$ 8,400</li>
                        </ul>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-y-12 bg-black py-12 px-4 md:px-16'>
                    <div className='flex flex-col content-center gap-2'>
                        <img src={img2} alt="" />
                        <p className='text-white text-center text-2xl font-bold tracking-tight'>Amet “il” Odio</p>
                        <p className='text-[#b6e925] text-sm text-center uppercase'>Vivamus 800st</p>
                    </div>
                    <div className='flex flex-col content-center gap-2'>
                        <img src={img3} alt="" />
                        <p className='text-white text-center text-2xl font-bold tracking-tight'>Elit viverra eget</p>
                        <p className='text-[#b6e925] text-sm text-center uppercase'>Eget eu phasellus</p>
                    </div>
                    <div className='flex flex-col content-center gap-2'>
                        <img src={img4} alt="" />
                        <p className='text-white text-center text-2xl font-bold tracking-tight'>Vitae duis amet</p>
                        <p className='text-[#b6e925] text-sm text-center uppercase'>Placerat 2019 GT</p>
                    </div>
                    <div className='flex flex-col content-center gap-2'>
                        <img src={img5} alt="" />
                        <p className='text-white text-center text-2xl font-bold tracking-tight'>Amet “IL” odio</p>
                        <p className='text-[#b6e925] text-sm text-center uppercase'>Vivamus 800st</p>
                    </div>
                    <div className='flex flex-col content-center gap-2'>
                        <img src={img6} alt="" />
                        <p className='text-white text-center text-2xl font-bold tracking-tight'>Elit viverra eget</p>
                        <p className='text-[#b6e925] text-sm text-center uppercase'>Eget eu phasellus</p>
                    </div>
                    <div className='flex flex-col content-center gap-2'>
                        <img src={img7} alt="" />
                        <p className='text-white text-center text-2xl font-bold tracking-tight'>Vitae duis amet</p>
                        <p className='text-[#b6e925] text-sm text-center uppercase'>Placerat 2019 GT</p>
                    </div>

                </div>
                <Builder/>
            </div>
            <Footer />
        </>
    )
}

export default Works