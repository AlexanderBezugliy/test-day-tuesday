import React, { useRef } from 'react'
import { menuItems } from '../assets'
import Title from './ui/Title'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'




const HeroDescr = () => {

    const titleRef = useRef();
    const container = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.inOut", duration: 1.5 } });

        tl.from(titleRef.current, { 
            y: 100, 
            opacity: 0, 
            delay: 1
        })
    });

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,              // Триггер - весь этот блок
                start: 'top 60%',                        // Анимация начнется, когда верх блока будет на 80% высоты экрана (чуть ниже центра)
                toggleActions: 'play none none reverse', // (Опционально) Если скроллить вверх, анимация сыграет назад
            }
        });

        tl.from('.anim-text', {
            y: 50,              
            opacity: 0,    
            duration: 1,
            stagger: 0.2, // текст появляется первым, кнопка через 0.2 сек
            ease: "power3.out"
        })
        .from('li', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
        }, "-=0.5");
    }, { scope: container });

    return (
        <div ref={container} className='mx-auto max-w-[1440px] px-5 mt-5 mb-[60px] '>
            <div className='flex flex-col descr-xl:flex-row justify-between'>
                {/* left side */}
                <div ref={titleRef} className='flex-[30%]'>
                    <Title title="SWITCH PRO" descr="4 399.99 EUR" />
                </div>

                {/* right side */}
                <div className='flex-[60%]'>
                    <div className='font-medium text-[14px] descr-xl:text-[20px] text-[#0C0D0D]'>
                        {/* descr */} {/* anim-text(класс GSAP) */}
                        <p className='anim-text max-w-[870px]'>E-MTB bez kompromisov! Model Switch bezchybne vystihuje popis „polovičný Enduro / polovičný Trail Bike“. Vsadili sme na úplne nový koncept Mullet Bike (29" koleso vpredu / 27,5" koleso vzadu). Hlavnou z výhod tohto riešenia je 29 palcové predné koleso, ktoré udáva presný smer plus je zárukou väčšej stability a 27,5 palcové zadné koleso, ktoré garantuje maximálny prenos sily, trakciu a najmä agilitu. Rám s novým priemyselným dizajnom ponúka 150mm zdvihu a rokmi overený virtuálny systém pruženia FSS. Geometria je ladená na náročný terén a technické traily.</p>
                        
                        <button className='anim-text flex items-center cursor-pointer hover:underline'>
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
