import React from 'react'
import builder from '../assets/img/custom-bike-builder-customer-testimonial.png'

function Builder() {
    return (
        <>
            <div className='bg-black p-8  text-white flex md:gap-20 flex-col md:flex-row'>
                <div className=' text-center md:max-w-[50%] py-20 md:pt-44 space-y-8'>
                    <p className='text-[#b6e925] font-bold text-xs tracking-wide'>What Our Client Say</p>
                    <h2 className='md:text-left md:leading-[3.6rem] text-4xl md:text-5xl font-bold tracking-tight '>“Vel accumsan eget elementum neque est, aenean scelerisque nunc mollis nec lacus, lorem facilisis nullam ultricies orci tortor curabitur sit tincidunt aenean sem ultrices.”</h2>
                    <p className='text-2xl font-bold tracking-tight'>Ethan D. Saw</p>
                </div>
                <div >
                    <img className='' src={builder} alt="" />
                </div>
            </div>
        </>
    )
}

export default Builder