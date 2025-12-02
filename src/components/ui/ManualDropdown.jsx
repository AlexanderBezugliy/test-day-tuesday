import React, { useState } from 'react'


const ManualDropdown = ({ title, items, isDark = false, arrow }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentLabel, setCurrentLabel] = useState(title);
    
    const handleSelect = (item) => {
        setCurrentLabel(item);
        setIsOpen(false); 
    };

    return (
        <div className="flex flex-col text-sm relative">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full h-[50px] text-left px-4 pr-2 py-2 focus:outline-none transition-colors duration-200
                    ${isDark ? "bg-[#0C0D0D] text-white" : "bg-[#E5E6E6] text-[#0C0D0D] "}`}
            >
                <div className="flex justify-between items-center">
                    <span className="uppercase">{currentLabel}</span>
                    <img src={arrow} alt="arrow-down" className={`inline w-5 h-5 object-cover transition-transform duration-200 ${isOpen ? "rotate-90" : "rotate-0"}`}  />
                </div>
            </button>

            {isOpen && (
                <ul className="w-full  bg-white border border-t-0 border-gray-300 absolute top-full left-0 z-10 shadow-lg">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className="h-[50px] flex items-center px-4 hover:bg-gray-200 cursor-pointer text-[#0C0D0D] uppercase"
                            onClick={() => handleSelect(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ManualDropdown
