import React from 'react'

const DhBike = () => {
    return (
        <div className='flex flex-col items-center my-[100px]'>
            <img src="/dh-bike/hero-bike.png" alt="hero-bike" className='max-w-[380px] max-h-[380px] bike-md:max-w-[600px] bike-md:max-h-[600px] px-5 bike-md:px-0 object-cover' />

            <div className='flex flex-col max-w-[600px] px-7 bike-sm:px-[74px]'>
                <h3 className='text-center bike-md:text-start text-[#7D8082] text-[14px] mb-2.5 mt-3.5 uppercase'>Recenzia</h3>
                <p className='text-[#0C0D0D]  bike-sm:text-[20px]'>Minusove teploty, nepohoda, sneh, faktory, ktore mnohych bikerov odradia od myslienky vytiahnut bicykel a vyrazit von.</p>
            </div>
        </div>
    )
}

export default DhBike
