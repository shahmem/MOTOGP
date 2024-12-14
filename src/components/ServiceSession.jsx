import React from 'react'
import listimg from '../assets/img/play-solid.svg'
function ServiceSession(Props) {
    return (
        <>
            <div className='bg-black text-white flex flex-col md:flex-row px-4 md:px-12 md:pt-24 py-12 md:space-x-20'>
                <div>
                    <img className='' src={Props.className} alt="" />
                </div>
                <div className='text-center md:text-left px-3 mt-12 md:mt-1 space-y-4 md:w-[40%]'>
                    <h2 className='text-4xl font-bold tracking-tight'>{Props.id}</h2>
                    <p className='text-justify md:text-left'>Morbi etiam mattis eu, in cursus pulvinar egestas tellus consectetur morbi augue nulla id eget id urna arcu vulputate dictumst tincidunt mauris mauris.</p>
                    <ul className='list-type-none text-left pb-8'>
                        <li className='flex items-center'><img className='size-2 mr-1.5' src={listimg} /> Consectetur ultrices eu ridiculus</li>
                        <li className='flex items-center'><img className='size-2 mr-1.5' src={listimg} alt="" />Vestibulum aliquam risus</li>
                        <li className='flex items-center'><img className='size-2 mr-1.5' src={listimg} alt="" />Mattis amet elementum vel sodales</li>
                        <li className='flex items-center'><img className='size-2 mr-1.5' src={listimg} alt="" />Tortor convallis aliquet eget consectetur</li>
                    </ul>
                    <a href="#" className=' flex items-center text-sm text-[#b6e925] px-3 py-2  font-semibold hover:text-[#89b11c]'>{Props.name} &nbsp;<img className='size-2 mr-1.5' src={listimg} alt="" /></a>
                </div>
            </div>
        </>
    )
}

export default ServiceSession