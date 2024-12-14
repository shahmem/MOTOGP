import React from 'react'
import Header from '../components/Header'
import bgimg from '../assets/img/img.jpg'
import img2 from '../assets/img/services-img-4.jpg'
import img3 from '../assets/img/custom-bike-builder-motorcycle.png'
import listimg from '../assets/img/play-solid.svg'
import img4 from '../assets/img/img1.jpg'
import img5 from '../assets/img/img2.jpg'
import img6 from '../assets/img/img3.jpg'
import img7 from '../assets/img/img4.jpg'
import img8 from '../assets/img/img5.jpg'
import img9 from '../assets/img/img6.jpg'
import Footer from '../components/Footer'
import Builder from '../components/Builder'
import Counts from '../components/Counts'
import Logo from '../components/Logo'
function Home() {
    const bgStyle = {
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };
    return (
        <>
            <Header />
            <div>
                <div style={bgStyle} className='h-screen  flex justify-center items-center '>
                    <div className='mt-8 md:mt-1'>
                        <div className='flex flex-wrap justify-center'>
                            <h1 className='text-6xl md:text-8xl max-w-[90%] md:max-w-[70%] text-white leading-[5rem] md:leading-[6.8rem] tracking-tight text-center font-bold'>Make Your Bike Truly Yours</h1>
                        </div>
                        <div className='flex justify-center'>
                            <a href="#" className=' uppercase mt-24 md:my-12 border-2 border-[#fff] text-[#fff] px-4 md:px-5 text-xs md:text-sm py-1 md:py-2 '>CHECK OUR WORKS</a>
                        </div>
                    </div>
                </div>
                <div className='bg-black pt-20 gap-10 md:gap-1 md:py-24 flex flex-col md:flex-row md:justify-evenly w-full'>
                    <div className='md:w-[40%] text-center md:text-left space-y-8 px-5'>
                        <p className='text-[#b6e925] font-bold text-xs'>Custom Bike Builder</p>
                        <h2 className='text-white text-4xl font-bold'>How It All Started</h2>
                        <p className='text-white md:max-w-[80%]'>Viverra phasellus convallis varius scelerisque pulvinar facilisis pharetra fusce sagittis pretium vulputate duis risus in dictum.</p><br />
                        <p className='text-white md:max-w-[80%]' >Ultrices imperdiet tincidunt amet, id consequat nulla ac malesuada laoreet vitae congue egestas semper nibh orci lectus condimentum fusce hendrerit arcu, integer sit morbi etiam integer egestas tempor pharetra interdum dictumst at turpis accumsan in laoreet leo cursus etiam gravida quam volutpat mauris.</p>
                        <a className='text-[#b6e925] flex items-center py-4' href="#">READ MORE <img className='size-2 mx-1.5' src={listimg} alt="" /></a>
                    </div>
                    <div className='md:w-[40%] p-3 '>
                        <img src={img2} className='' alt="" />
                    </div>
                </div>
                <Counts/>
                <div className='bg-black text-white flex flex-col md:flex-row md:pt-24 py-12 md:space-x-20'>
                    <div className='md:w-[54%] ml-[-3rem]'>
                        <img src={img3} alt="" />
                    </div>
                    <div className='text-center md:text-left px-3 mt-12 md:mt-1 space-y-4 md:w-[40%]'>
                        <p className='text-[#b6e925] font-bold text-xs tracking-wide'>What We Do</p>
                        <h2 className='text-4xl font-bold tracking-tight'>We Build Custom Bike</h2>
                        <p className='text-justify md:text-left'>Morbi etiam mattis eu, in cursus pulvinar egestas tellus consectetur morbi augue nulla id eget id urna arcu vulputate dictumst tincidunt mauris mauris.</p>
                        <ul className='list-type-none text-left pb-8'>
                            <li className='flex items-center'><img className='size-2 mr-1.5' src={listimg} /> Consectetur ultrices eu ridiculus</li>
                            <li className='flex items-center'><img className='size-2 mr-1.5' src={listimg} alt="" />Vestibulum aliquam risus</li>
                            <li className='flex items-center'><img className='size-2 mr-1.5' src={listimg} alt="" />Mattis amet elementum vel sodales</li>
                            <li className='flex items-center'><img className='size-2 mr-1.5' src={listimg} alt="" />Tortor convallis aliquet eget consectetur</li>
                        </ul>
                        <a href="#" className='text-sm text-[#b6e925] px-3 py-2  font-semibold border-2 border-[#b6e925] hover:bg-[#b6e925] hover:text-black'>CHECK OUR WORKS</a>
                    </div>
                </div>
                <div className='bg-black text-white text-center   px-3 py-12   space-y-4'>
                    <p className='text-[#b6e925] font-bold text-xs tracking-wide'>Custom Bike Builder</p>
                    <h2 className='text-4xl font-bold tracking-tight'>Our Latest Works</h2>
                    <p>Malesuada convallis augue lectus suspendisse sem condimentum pellentesque interdum bibendum ac sed et, id nulla dictum nulla nec tempor odio quam massa sit pharetra.</p>
                </div>
                <div className='bg-black grid grid-cols-1 md:grid-cols-4 space-y-12 md:space-y-0 md:gap-y-20 py-2 px-4'>
                    <div className='flex flex-col content-center md:col-span-2 gap-2'>
                        <img src={img4} alt="" />
                        <p className='text-white text-center text-2xl font-bold tracking-tight'>Sed morbi nisl</p>
                        <p className='text-[#b6e925] text-sm text-center uppercase'>Donec aenean 700SE</p>
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
                    <div className='flex flex-col content-center gap-2'>
                        <img src={img8} alt="" />
                        <p className='text-white text-center text-2xl font-bold tracking-tight'>Faucibus sed sem</p>
                        <p className='text-[#b6e925] text-sm text-center uppercase'>Pharetra vulputate 1000</p>
                    </div>
                    <div className='flex flex-col content-center md:col-span-2 gap-2'>
                        <img src={img9} alt="" />
                        <p className='text-white text-center text-2xl font-bold tracking-tight'>Velit quis in condimentum</p>
                        <p className='text-[#b6e925] text-sm text-center uppercase'>RX feugiat 2000</p>
                    </div>
                </div>
                <Builder/>
                <Logo/>
            </div>
            <Footer/>
        </>
    )
}

export default Home