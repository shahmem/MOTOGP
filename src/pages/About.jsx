import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from '../components/Head'
import Counts from '../components/Counts'
import owner from '../assets/img/owner.png'
import listimg from '../assets/img/play-solid.svg'
import team1 from '../assets/img/team-1.jpg'
import team2 from '../assets/img/team-2.jpg'
import team3 from '../assets/img/team-3.jpg'
import team4 from '../assets/img/team-4.jpg'

function About() {
    return (
        <>
            <Header />
            <Head id="About Us" />
            <div className='bg-black text-white flex flex-col md:flex-row px-4 md:px-12 md:pt-24 py-12 md:space-x-32'>
                <div>
                    <p className='text-[#b6e925] font-bold text-xs md:hidden'>Shop Owner</p>
                    <img src={owner} alt="" />
                </div>
                <div className='md:w-[40%] text-left space-y-8 px-4'>
                    <p className='text-[#b6e925] font-bold text-xs hidden md:block'>Shop Owner</p>
                    <h2 className='text-white text-5xl md:text-7xl tracking-tighter uppercase font-semibold'>Matt Owen</h2>
                    <p className='text-white md:max-w-[80%]'>Viverra phasellus convallis varius scelerisque pulvinar facilisis pharetra fusce sagittis pretium vulputate duis risus in dictum.</p><br />
                    <p className='text-white md:max-w-[80%]' >Porttitor amet, tristique semper cursus tellus posuere morbi et adipiscing turpis lobortis tincidunt magna porta pharetra pretium vel viverra felis augue ullamcorper fringilla vulputate dolor pretium vehicula erat potenti viverra cras est.</p>
                    <a className='text-[#b6e925] flex items-center py-4' href="#">READ MORE <img className='size-2 mx-1.5' src={listimg} alt="" /></a>
                </div>
            </div>
            <div className='bg-black flex flex-col md:flex-row text-white w-full md:gap-20 px-4 md:px-16 md:py-12'>
                <div className=' pt-16  py-12 flex flex-col gap-8'>
                    <h1 className='text-5xl font-bold tracking-tighter w-max pb-5 border-b-4 my-5 md:my-0 border-[#b6e925]'>Our Story</h1>
                    <p className='text-2xl font-bold '>With all disciplines under one roof, the NGENG Garage workshop is setup to design, prototype, manufacture a build from concept to final product.</p>
                </div>
                <div className='space-y-8 md:mt-20'>
                    <p className='md:max-w-[85%]'>Ultrices imperdiet tincidunt amet, id consequat nulla ac malesuada laoreet vitae congue egestas semper nibh orci lectus condimentum fusce hendrerit arcu, integer sit morbi etiam integer egestas tempor pharetra interdum dictumst at turpis accumsan in laoreet leo cursus etiam gravida quam volutpat mauris.</p>
                    <p className='md:max-w-[85%]'>Id adipiscing sed dapibus lorem dui massa aliquet nisl, maecenas nulla ante vitae viverra ipsum, id donec tempor, etiam pellentesque id sit urna, interdum.</p>
                </div>
            </div>
            <div className='bg-black text-white px-4 md:px-16 py-16 space-y-5'>
                <p className=' bg-black text-center text-[#b6e925] font-bold text-xs  '>Our Team</p>
                <h2 className=' text-4xl md:text-5xl tracking-tighter  font-semibold'>Expert. Experienced.</h2>
                <p className=' md:max-w-[80%]'>Maecenas nullam turpis nulla orci massa volutpat senectus massa proin aliquam eget.</p>
            </div>
            <div className='bg-black text-white items-center w-full flex flex-col md:flex-row gap-8 md:gap-0 pb-8 '>
                <div className='text-center'>
                    <img src={team1} alt="" />
                    <h2 className='font-bold text-2xl tracking-tight'>Danny Ings</h2>
                    <p className='text-[#b6e925] uppercase'>Gearhead</p>
                </div>
                <div className='text-center'>
                    <img src={team2} alt="" />
                    <h2 className='font-bold text-2xl tracking-tight'>Rodrigo Lima</h2>
                    <p className='text-[#b6e925] uppercase'>Senior mechanic</p>
                </div>
                <div className='text-center'>
                    <img src={team3} alt="" />
                    <h2 className='font-bold text-2xl tracking-tight'>Tim Hendrick</h2>
                    <p className='text-[#b6e925] uppercase'>Shop Manager</p>
                </div>
                <div className='text-center'>
                    <img src={team4} alt="" />
                    <h2 className='font-bold text-2xl tracking-tight'>Mario Jota</h2>
                    <p className='text-[#b6e925] uppercase'>Mechanic</p>
                </div>
            </div>
            <Counts />
            <Footer />
        </>
    )
}

export default About