import React, { useState } from 'react'
import BikeColors from './ui/BikeColors';



const Hero = () => {
    const [isActive, setIsActive] = useState('SWITCH PRO');

    const heroLinks = [
        { name: "Úvod", href: "#" },
        { name: "E-bicykle", href: "#" },
        { name: "E-Mtb", href: "#" },
        { name: "E-Enduro", href: "#" },
        { name: "SWITCH PRO", href: "#" },
    ];

    return (
        <div className='bg-[#F1F1F1]'>
            <div className='mx-auto max-w-[850px] hero-xl:max-w-[1440px] px-5  '>
                {/* navigate */}
                <div className='py-4'>
                    <ul className='flex gap-1.5 text-[11px] hero-sm:text-[14px] font-medium text-[#979A9B]'>
                        {/* links */}
                        {heroLinks.map((item, index) => (
                            <li key={item.name} className="flex items-center">
                                <a 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsActive(item.name);
                                    }}
                                    href={item.href}
                                    className={`transition-colors duration-200 hover:text-black 
                                            ${isActive === item.name ? "text-black" : "" }`}
                                >
                                    {item.name}
                                </a>

                                {index !== heroLinks.length - 1 && (
                                    <span className="ml-1.5 text-[#979A9B] font-normal">/</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='flex flex-col hero-xl:flex-row justify-between pb-5'>
                    {/* left side */}
                    <div className='flex flex-col justify-between'>
                        <div>
                            <div className='flex gap-4 mt-4 mb-6'>
                                <img src="/hero-section/switch.png" alt="switch" className='w-[220px] hero-md:max-w-[540px] hero-md:max-h-[130px] object-cover' />
                                <p className='text-[20px] font-medium tracking-[0.45px]'>PRO</p>
                            </div>

                            <div className='font-medium mb-5 hero-xl:mb-0'>
                                <button className='w-[100px] h-10 border cursor-pointer'>29"</button>
                                <button className='w-[100px] h-10 border border-gray-300 text-gray-400 cursor-pointer'>27.5"</button>
                            </div>
                        </div>

                        <BikeColors />
                    </div>

                    {/* right-side */}
                    <div className=''>
                        {/* + */}
                        <div className='flex justify-end'>
                            <div className='flex mr-7 mt-5 hero-md:mt-0 cursor-pointer'>
                                <p className='mr-1 font-medium'>Porovnať</p>
                                <img src="/hero-section/plus.png" alt="plus" className='w-5 h-5' />
                            </div>
                        </div>

                        <img src="/hero-section/hero-bike.png" alt="bike" className='hero-xl:max-w-[1010px] hero-xl:max-h-[600px] object-cover' />
                        
                        <div className='flex justify-end'>
                            <button className='text-white px-3 py-0.5 mt-2 hero-sm:mt-0 hero-sm:px-4 hero-sm:py-2.5 bg-black font-medium mr-5 cursor-pointer hover:bg-gray-600 duration-300'>Zoom</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
