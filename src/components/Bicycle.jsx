import React, { useRef, useState } from "react";
import BikeCard from "./ui/BikeCard";
import { bikes } from "../assets";
import Title from "./ui/Title";


const Bicycle = () => {
    const sliderRef = useRef(null);
    const [isStart, setIsStart] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleScroll = () => {
        const slider = sliderRef.current;

        if (!slider) return;

        const tolerance = 2; // погрешность
        setIsStart(slider.scrollLeft <= tolerance); // Мы в начале, если отступ слева (scrollLeft) почти 0
        setIsEnd(slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - tolerance); // Мы в конце, если (прокрутка + ширина экрана) >= (общая ширина контента)
    };

    const scroll = (direction) => {
        const slider = sliderRef.current;
        
        if (!slider) return;
    
        const firstCard = slider.firstElementChild; // находим первый элемент (карточку) внутри слайдера
        
        if (!firstCard) return;
    
        const cardWidth = firstCard.clientWidth; // получаем ширину карточки
    
        const gap = 1; // учитываем отступ 
        const scrollAmount = cardWidth + gap; // итоговая дистанция скролла
    
        slider.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' }); // скроллим: направление (-1 или 1) умножаем на дистанцию
    };
    

    return (
        <div id="bicykle" className="relative w-full">
            <div className="mx-auto max-w-[1440px] px-5 pt-5 pb-10">

                <div className="flex items-center justify-between">
                    {/* title section */}
                    <Title title="BICYKLE"/>
                    {/* arrows */}
                    <div className='flex items-center'>
                        <button 
                            onClick={() => scroll(-1)} 
                            disabled={isStart}
                            className={`p-2 transition-all duration-200 
                                ${isStart ? 'opacity-30 cursor-default' : 'hover:scale-110 opacity-100 cursor-pointer'}`}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transform rotate-180">
                                <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button 
                            onClick={() => scroll(1)} 
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

            </div>

            {/* slider */}
            <div 
                ref={sliderRef}
                onScroll={handleScroll}
                className="
                    flex gap-0.5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-5 mb-10
                    [&::-webkit-scrollbar]:h-[3px]
                    [&::-webkit-scrollbar-track]:bg-gray-300
                    [&::-webkit-scrollbar-track]:rounded-full
                    [&::-webkit-scrollbar-track]:mx-5
                    [&::-webkit-scrollbar-thumb]:bg-black
                    [&::-webkit-scrollbar-thumb]:rounded-full
                "
            >

                {/* cards */}
                {bikes.map((bike) => (
                    <BikeCard 
                        key={bike.id} 
                        bike={bike} 
                    />
                ))}

                <button 
                    onClick={() => scroll(1)}
                    className={`absolute top-3/5 -translate-y-1/2 right-10 py-[30px] px-2.5 bg-white hover:bg-gray-300 duration-300 cursor-pointer
                        ${ isEnd ? 'opacity-30 cursor-default' : 'hover:scale-105 opacity-100' }`}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                
            </div>
        </div>
    );
};

export default Bicycle;