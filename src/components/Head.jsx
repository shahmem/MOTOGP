import React from 'react'

function Head(Props) {
    return (
        <>
            <div className='bg-black text-white w-full pt-16 md:pt-32 px-4 md:px-16 py-12 flex flex-col md:flex-row md:gap-24'>
                <h1 className='text-4xl md:text-7xl font-bold tracking-tighter border-b-4 my-5 md:my-0 border-[#b6e925] pb-3'>{Props.id}</h1>
                <p className='md:max-w-[45%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis tenetur sint quas iste optio temporibus ducimus adipisci veritatis omnis aut nisi libero distinctio modi mollitia quia, expedita enim animi quae!</p>
            </div>
        </>
    )
}

export default Head