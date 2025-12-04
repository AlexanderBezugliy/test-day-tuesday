import React, { useRef } from 'react'
import { specs } from '../assets'
import Title from './ui/Title'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const Specification = () => {
    const titleRef = useRef();
    const container = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({ 
            defaults: { ease: "power3.inOut", duration: 1.5 },
            scrollTrigger: {
                scrollTrigger: {
                    trigger: container.current,      // Триггер - весь этот блок
                    start: 'top 80%',                // Анимация начнется, когда верх блока будет на 80% высоты экрана (чуть ниже центра)
                    toggleActions: 'play none none', // (Опционально) Если скроллить вверх, анимация сыграет назад
                }
            }
        });

        tl.from(titleRef.current, { 
            y: 100, 
            opacity: 0, 
            delay: 1
        })
    });

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,      // Триггер - весь этот блок
                start: 'top 80%',                // Анимация начнется, когда верх блока будет на 80% высоты экрана (чуть ниже центра)
                toggleActions: 'play',
            }
        });

        tl.from('li', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
        }, "-=0.5")
        .from('.animate-descr', { 
            y: 100, 
            opacity: 0, 
        }, "-=0.4")
    }, { scope: container });
    

    return (
        <div className='w-full pt-5 bg-[#F1F1F1]'>
            <div ref={container}  className='mx-auto max-w-[1440px] px-5 flex flex-col specific-xl:flex-row justify-between pb-[170px]'>
                <div ref={titleRef} className='flex-[38%]'>
                    <Title title="ŠPECIFIKÁCIA" />
                </div>

                <ul className="relative grid grid-cols-1 specific-md:grid-cols-2 gap-x-5 gap-y-0">
                    
                    {specs.map((item) => (
                        <li 
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
                        </li>
                    ))}

                    {/* descr */}
                    <div className='absolute -bottom-20  flex justify-center'>
                        <p className='animate-descr  max-w-[453px] text-[13px] text-[#333333] font-medium'>* Špecifikácia produktu, produkty a údaje sa môžu zmeniť bez predchádzajúceho upozornenia, aby sa zlepšila ich funkčnosť, spoľahlivosť alebo dizajn.</p>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Specification
