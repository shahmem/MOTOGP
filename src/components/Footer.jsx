import React from 'react'
import img from '../assets/img/ftr-img.jpg'
import logo from '../assets/img/motogp.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
function Footer() {
    const bgStyle = {
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };
    return (
        <div>
            <div style={bgStyle} className='text-white p-12 md:p-20 flex flex-col gap-8'>

                <h1 className='uppercase font-bold text-4xl md:text-[5.2rem] md:leading-[5rem]  tracking-tight md:max-w-[70%]'>Let’s Build Your Dream Bike!</h1>
                <p className='text=lg md:text-xl md:max-w-[40%]'>Amet risus, tempor scelerisque posuere tortor sed lobortis non sem venenatis nunc quisque neque, amet sapien in velit odio.</p>
                <a href="#" className='uppercase border-2 border-[#b6e925] text-[#b6e925] px-5 text-sm py-2 font-bold w-max hover:bg-[#b6e925] hover:text-black'>let's talk</a>
            </div>

            <footer className="bg-black text-white py-8">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-16 px-4">
                    <div>
                        <img className='mb-4' src={logo} alt="" />
                        <p className="text-gray-400">
                            Amet morbi justo facilisis integer odio eu feugiat egestas nulla a
                            ipsum morbi iaculis urna nunc.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff", }} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FontAwesomeIcon icon={faTwitter} style={{ color: "#ffffff", }} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff", }} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FontAwesomeIcon icon={faYoutube} style={{ color: "#ffffff", }} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl tracking-tighter font-semibold mb-4">CONTACT INFO</h2>
                        <p className="text-gray-400">123 Fifth Ave, New York, NY 12004, USA.</p>
                        <p className="text-gray-400">+1 123 456 78 90</p>
                        <p className="text-gray-400">mail@example.com</p>
                    </div>

                    <div>
                        <h2 className="text-2xl tracking-tighter font-semibold mb-4">Services</h2>
                        <ul className="text-gray-400 space-y-2">
                            <li>
                                <a href="#" className="hover:text-white">
                                    Bike Modifying
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Maintenance
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Accessories
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Custom Build
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='md:col-span-2'>
                        <h2 className="text-2xl tracking-tighter font-semibold mb-4">STAY UP TO DATE</h2>
                        <form className="flex  items-center sm:items-stretch">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="p-2 w-full  text-gray-800 bg-white focus:outline-none " />
                            <a href="#" className='px-6 py-2 uppercase border-2 border-[#b6e925] font-semibold text-[#b6e925] mx-1 text-sm tracking-tight hover:bg-[#b6e925] hover:text-black'>SUBSCRIBE</a>
                        </form>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-800 pt-4 text-center text-gray-500 text-sm">
                    Copyright © 2024 Bike Modification | Powered by Bike Modification
                </div>
            </footer>
        </div>
    )
}

export default Footer