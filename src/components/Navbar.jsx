import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";


const Navbar = () => {
    const [isActive, setIsActive] = useState('E-bicykle');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        { name: "E-bicykle", href: "e-bicykle", active: true }, 
        { name: "Bicykle", href: "bicykle", active: false },
        { name: "Doplnky", href: "doplnky", active: false },
    ];


    return (
        <div className='mx-auto max-w-[1440px] px-5  flex justify-between items-center nav-md:flex-col nav-xl:flex-row gap-y-5 nav-xl:gap-y-0'>
            {/* LEFT SIDE */}
            <div className='flex items-center'>
                <img src="/logo.png" alt="logo" className='my-[19px] mr-[33px]' />

                <ul className='hidden nav-md:flex items-center uppercase'>
                    {links.map((link) => (
                        <li key={link.name}>
                            <a 
                                onClick={(e) => {
                                    e.preventDefault(); 
                                    setIsActive(link.name); 
                                }}
                                href={link.href}
                                className={`block px-5 py-5 transition-colors duration-300
                                        ${isActive === link.name
                                            ? "bg-[#E5E5E5] text-black" 
                                            : "bg-transparent hover:bg-gray-100"
                                    }
                                `}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* RIGHT SIDE */}
            <div className='hidden nav-md:flex'>
                <ul className='flex items-center gap-10'>
                    <li className='cursor-pointer'><a href="vyhladavanie"><img src="/search.png" alt="search" className='inline mr-1 mb-0.5' />Vyhľadávanie</a></li>
                    <li className='cursor-pointer'><a href="najst-predajcu">Nájsť predajcu</a></li>
                </ul>
                <button className='ml-10 cursor-pointer'>SVK</button>
            </div>
            
            {/* burger */}
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className='block nav-md:hidden text-3xl cursor-pointer z-50 relative'
            >
                <IoMenu />
            </button>
            {/* overflow close */}
            <div 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 nav-md:hidden
                    ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            ></div>

            {/* side bar */}
            <div className={`fixed top-0 right-0 h-full w-[250px] bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out nav-md:hidden
                            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex flex-col pt-20 px-5 h-full overflow-y-auto">
                    <ul className='flex flex-col items-start uppercase w-full mb-10 border-b border-gray-200 pb-5'>
                        {links.map((link) => (
                            <li key={link.name} className="w-full">
                                <a 
                                    onClick={(e) => { 
                                        e.preventDefault(); 
                                        setIsActive(link.name);
                                        setIsMenuOpen(!isMenuOpen);
                                    }}
                                    href={link.href}
                                    className={`block w-full py-4 text-lg font-medium transition-colors duration-300
                                            ${isActive === link.name ? "text-black font-bold underline" : "text-gray-500" }`}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <ul className='flex flex-col gap-5 text-gray-600'>
                        <li className='cursor-pointer'><a href="vyhladavanie"><img src="/search.png" alt="search" className='inline mr-2' />Vyhľadávanie</a></li>
                        <li className='cursor-pointer'><a href="najst-predajcu">Nájsť predajcu</a></li>
                        <li className='mt-5'><button className='font-bold border-2 border-gray-300 px-4 py-1 rounded'>SVK</button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
