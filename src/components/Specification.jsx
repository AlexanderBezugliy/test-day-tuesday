import React from 'react'


const Specification = () => {
    const specs = [
        { id: 1, label: "RAM", value: 'Hi Ten, 16" (410mm)', icon: "/specification/img1.png" },
        { id: 2, label: "Vidlica", value: 'Hi ten- unicrown 24"', icon: "/specification/img10.png" },
        { id: 3, label: "Viackolecko", value: "Torpedo Velosteel 18T", icon: "/specification/img2.png" },
        { id: 4, label: "Prevodnik", value: "Prowheel, 38T/152 mm", icon: "/specification/img11.png" },
        { id: 5, label: "Brzdy", value: "Alhonga V-brake", icon: "/specification/img3.png" },
        { id: 6, label: "Rafiky", value: "RMX 20, 507X20 N, 36H", icon: "/specification/img12.png" },
        { id: 7, label: "Plaste", value: '24x1,50" black', icon: "/specification/img4.png" },
        { id: 8, label: "Naboje", value: "Matrix alloy 36H silver/Velosteel Torpedo 36H", icon: "/specification/img13.png" },
        { id: 9, label: "Oska", value: "NECO 122,5mm", icon: "/specification/img5.png" },
        { id: 10, label: "Pedale", value: "SP 877", icon: "/specification/img14.png" },
        { id: 11, label: "Retaz", value: "KMC Z410/94L", icon: "/specification/img6.png" },
        { id: 12, label: "Predstavec", value: "Zoom C40, 40/25,4 mm", icon: "/specification/img15.png" },
        { id: 13, label: "Riadidla", value: "Zoom NR24, 560/25,4 mm", icon: "/specification/img7.png" },
        { id: 14, label: "Hl zlozenie", value: 'Neco steel 1-1/8"', icon: "/specification/img16.png" },
        { id: 15, label: "Sedlo", value: "CTM lady comfort", icon: "/specification/img8.png" },
        { id: 16, label: "Sedlovka", value: "Zoom SP-200, 300/28,6 mm", icon: "/specification/img17.png" },
        { id: 17, label: "Rychlosti", value: "1 speed", icon: "/specification/img9.png" },
        { id: 18, label: "Hmotnost", value: "14,2 kg", icon: "/specification/img18.png" },
    ];

    return (
        <div className='w-full pt-5 bg-[#F1F1F1]'>
            <div className='mx-auto max-w-[1440px] px-5 flex flex-col specific-xl:flex-row justify-between pb-[170px]'>
                <h3 className='mb-4 text-[20px] font-medium text-center specific-xl:text-start specific-xl:mb-0'>ŠPECIFIKÁCIA</h3>

                <div className="relative grid grid-cols-1 specific-md:grid-cols-2 gap-x-5 gap-y-0">
                    
                    {specs.map((item) => (
                        <div 
                            key={item.id} 
                            className="flex items-start text-[16px] font-medium py-2.5 border-b border-[#D8D9DA] last:border-0"
                        >
                            {/* icon */}
                            <div className="shrink-0 mr-6">
                                <img 
                                    src={item.icon} 
                                    alt={item.label} 
                                    className="w-10 h-10 object-contain opacity-60" 
                                />
                            </div>

                            {/* text */}
                            <div className="flex flex-col gap-1 w-[430px]">
                                <span className="text-[#7D8082]  tracking-wide">{item.label}</span>           
                                <span className="text-black ">{item.value}</span>
                            </div>
                        </div>
                    ))}

                    {/* descr */}
                    <div className='absolute -bottom-20  flex justify-center'>
                        <p className='max-w-[453px] text-[13px] text-[#333333] font-medium'>* Špecifikácia produktu, produkty a údaje sa môžu zmeniť bez predchádzajúceho upozornenia, aby sa zlepšila ich funkčnosť, spoľahlivosť alebo dizajn.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specification
