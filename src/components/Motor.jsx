import React from 'react'



const Motor = () => {
    return (
        <div className='w-full pt-5 bg-[#0C0D0D] text-white'>
            <div className='mx-auto max-w-[1440px] px-5 gap-x-20  flex'>
                {/* left */}
                <div className='flex-[30%]'>
                    <h3 className='mb-4 text-[20px] font-medium text-center specific-xl:text-start specific-xl:mb-0'>MOTOR A BATÉRIA</h3>
                </div>

                {/* right */}
                <div className='flex-[70%]'>
                    <h3 className='text-[20px] font-medium'>SHIMANO STEPS EP8</h3>
                    
                    <img src="/motor/img1.png" alt="main-img" className='mt-[30px] mb-[43px] object-cover' />

                    <div className='flex justify-between gap-[45px] pb-28'>
                        <div className='flex flex-col max-w-[430px] space-y-5'>
                            <img src="/motor/img2.png" alt="icon-lft" className='w-10 h-10' />
                            
                            <h4 className='font-medium'>250W motor STEPS EP8</h4>
                            <p>Silný a zároveň ľahký motor navrhnutý pre optimálny <br /> prenos sily.</p>
                            
                            <div>
                                <p>váha menej ako 2,5 kg</p>
                                <span>krútiaci moment až 85Nm</span>
                            </div>
                        </div>

                        <div className='flex flex-col max-w-[430px] space-y-5'>
                            <img src="/motor/img3.png" alt="icon-right" className='w-10 h-10' />
                            
                            <h4 className='font-medium'>630 Wh batéria Shimano BT-E8036</h4>
                            <p>Výkonná Li-Ion batéria s vysokou kapacitou a funkciou rýchlonabíjania Vás dostane tam ...... a späť!</p>
                            
                            <div>
                                <p>dojazd až do 100km</p>
                                <span>1000 nabíjacích cyklov bez výraznejšej straty kapacity</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Motor;
