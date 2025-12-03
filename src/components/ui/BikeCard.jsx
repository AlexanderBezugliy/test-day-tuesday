import React, { useState } from 'react'
import BikeColors from './BikeColors';

const BikeCard = ({ bike }) => {
    const [isActive, setIsActive] = useState("29");

    const getButtonClass = (size) => {
        const baseClass = "w-[61px] py-1.5 border";
        const activeClass = "border-black";
        const inactiveClass = "border-[#7D8082] text-[#7D8082] hover:border-gray-400";

        return `${baseClass} ${isActive === size ? activeClass : inactiveClass}`;
    };

    return (
        <div 
            key={bike.id} 
            className="w-[33.333%] bg-gray-200 p-4 shrink-0 snap-start"
        >
            <div className="flex justify-between items-start">
                <div className="flex">
                    <button onClick={() => setIsActive('29')} className={getButtonClass('29')}>29”</button>
                    <button onClick={() => setIsActive('27.5')} className={getButtonClass('27.5')}>27,5”</button>
                </div>
                
                <button className="flex items-center gap-2.5 text-sm font-medium hover:underline">Porovnať<img src="/hero-section/plus.png" alt="plus" className="inline" /></button>
            </div>

            {/* img */}
            <img src={bike.img} alt={bike.title} className="mx-auto w-full mix-blend-multiply pt-[140px] pb-[30px] object-cover"  />

            <div className="flex justify-between items-end">
                <div>
                    <h3 className="font-medium">{bike.title}</h3>
                    <p className="text-gray-500">{bike.price}</p>
                </div>
                
                <BikeColors />
            </div>
        </div>
    )
}

export default BikeCard
