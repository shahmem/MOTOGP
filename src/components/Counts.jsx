import React from 'react'

function Counts() {
    return (
        <>
            <div className='bg-black py-12'>
                <ul className='text-white text-4xl md:text-7xl grid grid-cols-2 md:grid-cols-4  w-full gap-5 list-type-none'>
                    <li className=' font-bold text-center'>1986 <br /><span className=' text-xs font-semibold'>FOUNDED</span></li>
                    <li className=' font-bold text-center'>256 <br /><span className=' text-xs font-semibold'>PROJECTS</span></li>
                    <li className=' font-bold text-center'>128 <br /><span className=' text-xs font-semibold'>CLIENTS</span></li>
                    <li className=' font-bold text-center'>16 <br /><span className=' text-xs font-semibold'>AWARDS</span></li>
                </ul>
            </div>
        </>
    )
}

export default Counts