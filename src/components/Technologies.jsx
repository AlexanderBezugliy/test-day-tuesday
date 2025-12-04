import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState } from 'react';
import Title from './ui/Title';
import { technologyImages } from '../assets';


const Technologies = () => {
    const sliderRef = useRef(null);
    const [isStart, setIsStart] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    // GSAP
    const container = useRef();
    useGSAP(() => {
        gsap.fromTo(container.current, 
            { 
                // НАЧАЛЬНОЕ СОСТОЯНИЕ
                scale: 0.5, 
                opacity: 0.8,
            }, 
            {
                // КОНЕЧНОЕ СОСТОЯНИЕ
                scale: 1, // нормальный размер ("приехал" к нам)
                opacity: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top bottom", 
                    end: "bottom bottom", // закончить, когда НИЗ контейнера коснется НИЗА экрана (или можно 'center center')
                    scrub: 1, //плавностью в 1 секунду
                }
            }
        );
    }, { scope: container });


    const handleScroll = () => {
        const slider = sliderRef.current;

        if (!slider) return;

        const tolerance = 2; // погрешность
        setIsStart(slider.scrollLeft <= tolerance); // Мы в начале, если отступ слева (scrollLeft) почти 0
        setIsEnd(slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - tolerance); // Мы в конце, если (прокрутка + ширина экрана) >= (общая ширина контента)
    };

    const scroll = (offset) => {
        sliderRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    };

    return (
        <div className='w-full bg-[#F1F1F1] select-none'>
            <div ref={container} className='mx-auto max-w-[1440px] px-5 pt-5 pb-10'>
                
                <div className='flex items-center justify-between mb-[27px]'>
                    {/* title section */}
                    <Title title="TECHNOLÓGIE" />
                    
                    {/* arrows */}
                    <div className='flex items-center'>
                        <button 
                            onClick={() => scroll(-350)} 
                            disabled={isStart}
                            className={`p-2 transition-all duration-200 
                                ${isStart ? 'opacity-30 cursor-default' : 'hover:scale-110 opacity-100 cursor-pointer'}`}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transform rotate-180">
                                <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button 
                            onClick={() => scroll(350)} 
                            disabled={isEnd}
                            className={`p-2 transition-all duration-200 
                                ${isEnd ? 'opacity-30 cursor-default' : 'hover:scale-110 opacity-100 cursor-pointer'}`}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* slider */}
                <div 
                    ref={sliderRef}
                    onScroll={handleScroll}
                    className='
                        flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth mb-5 pb-30
                        [&::-webkit-scrollbar]:h-[3px]
                        [&::-webkit-scrollbar-track]:bg-gray-300
                        [&::-webkit-scrollbar-track]:rounded-full
                        [&::-webkit-scrollbar-thumb]:bg-black
                        [&::-webkit-scrollbar-thumb]:rounded-full
                    '
                >
                    {technologyImages.map((item) => (
                        <div
                            key={item.id}
                            className="
                                shrink-0 snap-start w-[210px] 
                                sm:w-[calc(50%-12px)] 
                                md:w-[calc(33.333%-16px)] 
                                lg:w-[calc(25%-18px)] 
                                xl:w-[calc(16.666%-20px)]
                            "
                        >
                            <img src={item.src} alt={item.alt} className="rounded-full w-20 h-20 object-cover" />
                            <h2 className='font-medium mt-2.5 mb-4'>{item.title}</h2>
                            <p className='text-[14px] max-w-[210px] leading-relaxed'>{item.descr}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Technologies;