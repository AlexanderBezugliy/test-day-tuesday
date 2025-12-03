import React from 'react'

const DoplinkyCard = ({ doplinky }) => {
    return (
        <div 
            key={doplinky.id} 
            className="w-full slideBike-md:w-[50%] slideBike-lg:w-[33.333%] bg-gray-200 p-4 shrink-0 snap-start"
        >
            {/* img */}
            <img src={doplinky.img} alt={doplinky.title} className="mx-auto w-full mix-blend-multiply pt-[140px] pb-[30px] object-cover"  />

            <div className="flex flex-col slideBike-sm:flex-row justify-between items-center slideBike-sm:items-end gap-4 slideBike-sm:gap-0">
                <h3 className="font-medium">{doplinky.title}</h3>
                <p className="text-gray-500">{doplinky.price}</p>
            </div>
        </div>
    )
}

export default DoplinkyCard
