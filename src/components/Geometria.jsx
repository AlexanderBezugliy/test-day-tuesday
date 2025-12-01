import React from 'react'



const Geometria = () => {
    const geometryData = [
        { id: "A", name: "Head tube angle", val1: "66.5", val2: "66.5", val3: "66.5" },
        { id: "B", name: "Seat tube angle", val1: "75", val2: "75", val3: "75" },
        { id: "C", name: "Horizontal top tube", val1: "619 mm", val2: "619 mm", val3: "619 mm" },
        { id: "D", name: "Seat tube length", val1: "420 mm", val2: "420 mm", val3: "420 mm" },
        { id: "E", name: "Chainstay length", val1: "460 mm", val2: "460 mm", val3: "460 mm" },
        { id: "F", name: "Wheelbase", val1: "760 mm", val2: "760 mm", val3: "760 mm" },
        { id: "G", name: "Head tube length", val1: "110 mm", val2: "110 mm", val3: "110 mm" },
        { id: "H", name: "BB drop", val1: "-8", val2: "-8", val3: "-8" },
        { id: "I", name: "Fork length", val1: "545 mm", val2: "545 mm", val3: "545 mm" },
        { id: "J", name: "Fork offset", val1: "42 mm", val2: "42 mm", val3: "42 mm" },
        { id: "R", name: "Reach", val1: "460 mm", val2: "460 mm", val3: "460 mm" },
        { id: "S", name: "Stack height", val1: "592 mm", val2: "592 mm", val3: "592 mm" },
    ];

    return (
        <div className='w-full mb-25 border-t border-[#D8D9DA]'>
            <div className="mx-auto max-w-[1440px] px-5 mt-5 flex flex-col sizes-md:flex-row gap-5 text-[#0C0D0D]">
                {/* left */}
                <div className="flex-[33%] mb-5 sizes-md:mb-0 text-center sizes-md:text-start">
                    <h3 className="text-[20px] font-medium mb-[30px]">GEOMETRIA</h3>

                    <div className='flex justify-center sizes-md:block'>
                        <img src="/geometria/geom.png" alt="geom-img" />
                    </div>
                </div>

                {/* right */}
                <div className="flex-[70%] flex flex-col text-[11px] geom-md:text-[16px]">
                    <div className='grid grid-cols-[20px_140px_repeat(3,1fr)] geom-sm:grid-cols-[50px_repeat(4,1fr)] border-b border-[#D8D9DA] py-4'>
                        <p></p>
                        <p></p>
                        <p>M / 17"</p>
                        <p>L / 19"</p>
                        <p>XL / 21"</p>
                    </div>

                    {geometryData.map((row) => (
                        <div 
                            key={row.id} 
                            className='grid grid-cols-[20px_140px_repeat(3,1fr)] geom-sm:grid-cols-[50px_repeat(4,1fr)] items-center border-b border-[#D8D9DA] py-3 hover:bg-[#F5F5F5] transition-colors'
                        >
                            <p>{row.id}</p>
                            <p>{row.name}</p>
                            <p>{row.val1}</p>
                            <p>{row.val2}</p>
                            <p>{row.val3}</p>
                        </div>
                    ))}

                </div>      
            </div>
        </div>
    )
}

export default Geometria;
