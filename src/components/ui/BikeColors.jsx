import React, { useState } from 'react'


const colorsData = [
    {
        id: 1,
        name: "Blue/Yellow",
        bgColorClass: "bg-[linear-gradient(90deg,#374151_50%,#F1F15B_50%)]"
    },
    { 
        id: 2, 
        name: "Black", 
        bgColorClass: "bg-black" 
    },
    { 
        id: 3, 
        name: "Gray", 
        bgColorClass: "bg-gray-500" 
    },
    { 
        id: 4, 
        name: "Light Gray", 
        bgColorClass: "bg-gray-300" 
    },
    { 
        id: 5, 
        name: "Purple", 
        bgColorClass: "bg-[#5B1890]" 
    },
    {
        id: 6,
        name: "Red/Dark Red",
        bgColorClass: "bg-[linear-gradient(90deg,#A65252_50%,#913535_50%)]"
    },
];

const BikeColors = () => {
    const [activeColorId, setActiveColorId] = useState(colorsData[0].id);

    return (
        <div className="flex">
            <div className="flex border border-gray-400 divide-x divide-gray-300">
                {colorsData.map((color) => (
                    <button
                        onClick={() => setActiveColorId(color.id)}
                        key={color.id}
                        className={`relative w-10 h-10 flex items-center justify-center outline-none cursor-pointer transition-all duration-300
                            ${activeColorId === color.id ? "ring-[3px] ring-inset ring-gray-800 z-10" : "hover:bg-gray-200"}`}
                    >
                        <span
                            className={`block w-5 h-5 rounded-full ${color.bgColorClass}`}
                        ></span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default BikeColors
