import React from 'react'

const HeroDescr = () => {
    const menuItems = [
        { text: "Detaily", icon: "/hero-descr/img1.png" },
        { text: "Špecifikácia", icon: "/hero-descr/img2.png" },
        { text: "Motor a batéria", icon: "/hero-descr/img3.png" },
        { text: "Veľkosť", icon: "/hero-descr/img4.png" },
        { text: "Geometria", icon: "/hero-descr/img5.png" },
        { text: "Technológie", icon: "/hero-descr/img6.png" },
        { text: "Návody", icon: "/hero-descr/img7.png" },
    ];

    return (
        <div className='mx-auto max-w-[1440px] px-5 mt-5 mb-[60px] '>
            <div className='flex flex-col descr-xl:flex-row justify-between'>
                {/* left side */}
                <div className='flex-[30%]'>
                    <div className='font-medium text-[20px] mb-5 descr-xl:mb-0'>
                        <h3>SWITCH PRO</h3>
                        <p className='text-[#7D8082]'>4 399.99 EUR</p>
                    </div>
                </div>

                {/* right side */}
                <div className='flex-[60%]'>
                    <div className='font-medium text-[14px] descr-xl:text-[20px] text-[#0C0D0D]'>
                        {/* descr */}
                        <p className='max-w-[870px]'>E-MTB bez kompromisov! Model Switch bezchybne vystihuje popis „polovičný Enduro / polovičný Trail Bike“. Vsadili sme na úplne nový koncept Mullet Bike (29" koleso vpredu / 27,5" koleso vzadu). Hlavnou z výhod tohto riešenia je 29 palcové predné koleso, ktoré udáva presný smer plus je zárukou väčšej stability a 27,5 palcové zadné koleso, ktoré garantuje maximálny prenos sily, trakciu a najmä agilitu. Rám s novým priemyselným dizajnom ponúka 150mm zdvihu a rokmi overený virtuálny systém pruženia FSS. Geometria je ladená na náročný terén a technické traily.</p>
                        
                        <button className='flex items-center cursor-pointer hover:underline'>
                            <img src="/hero-descr/arrow-down.png" alt="arrow-down" className='inline mr-1.5' />
                            Čítať viac
                        </button>
                    </div>
                    
                    {/* list */}
                    <div className='mt-[45px]'> 
                        <ul className='grid grid-cols-2 descr-md:grid-cols-3 descr-xl:block font-medium space-y-[13px] text-[#646768]'>
                            {menuItems.map((item) => (
                                <li 
                                    key={item.text} 
                                    className="hover:text-black cursor-pointer transition-colors duration-200" 
                                >
                                    <img src={item.icon} alt={item.text} className='inline mr-[15px]' />
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroDescr
