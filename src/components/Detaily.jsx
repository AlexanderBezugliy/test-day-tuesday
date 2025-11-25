import React, { useEffect, useState } from 'react'


const detailImages = [
    { id: 1, src: "/detail-slider/img1.png", alt: "Detail 1" },
    { id: 2, src: "/detail-slider/img2.png", alt: "Detail 2" },
    { id: 3, src: "/detail-slider/img3.png", alt: "Detail 3" },

    { id: 4, src: "/detail-slider/img1.png", alt: "Detail 4" },
    { id: 5, src: "/detail-slider/img2.png", alt: "Detail 5" },
    { id: 6, src: "/detail-slider/img3.png", alt: "Detail 6" },
];

const Detaily = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translate, setTranslate] = useState(0);

    const [slidesVisible, setSlidesVisible] = useState(2.5);
    
    const maxIndex = Math.ceil(detailImages.length - slidesVisible);
    
    const nextSlide = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        const pageX = e.pageX || e.touches[0].pageX;
        setStartX(pageX);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const pageX = e.pageX || e.touches[0].pageX;
        const diff = pageX - startX; 
        setTranslate(diff);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        const threshold = 50;

        if (translate < -threshold && currentIndex < maxIndex) {
            nextSlide(); 
        } else if (translate > threshold && currentIndex > 0) {
            prevSlide(); 
        }
        
        setTranslate(0); 
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 860) {
                setSlidesVisible(1.2); 
            } else if (window.innerWidth < 1050) {
                setSlidesVisible(1.8); 
            } else {
                setSlidesVisible(2.5); 
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='w-full overflow-hidden select-none'>
            {/* nav */}
            <div className='mx-auto max-w-[1440px] px-5 pt-[60px] mb-4 flex items-center justify-between'>
                <h3 className='text-[#0C0D0D] text-[20px] font-medium'>DETAILY</h3>

                <div className='flex items-center'>
                    <div 
                        onClick={prevSlide} 
                        className={`cursor-pointer p-2 transition-all duration-200 
                            ${ currentIndex === 0 ? 'opacity-30 cursor-default' : 'hover:scale-110 opacity-100' }`}
                    >
                        {/* left */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-180">
                            <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div 
                        onClick={nextSlide} 
                        className={`cursor-pointer p-2 transition-all duration-200 
                            ${currentIndex >= maxIndex ? 'opacity-30 cursor-default' : 'hover:scale-110 opacity-100' }`}
                    >
                        {/* right */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>

            {/* slider */}
            <div 
                className='relative mx-auto overflow-hidden cursor-grab active:cursor-grabbing'
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp} 
                onTouchStart={handleMouseDown} 
                onTouchMove={handleMouseMove}
                onTouchEnd={handleMouseUp}
            >
                <div 
                    className="flex transition-transform duration-300 ease-out"
                    style={{ transform: `translateX(calc(-${currentIndex * (100 / slidesVisible)}% + ${translate}px))` }}
                >
                    {detailImages.map((image) => (
                        <div 
                            key={image.id} 
                            className="shrink-0 w-[300px] h-[300px] slider-md:w-[400px] slider-md:h-[400px] slider-xl:w-[600px] slider-xl:h-[600px]  outline-none"
                            style={{ minWidth: `calc(100% / ${slidesVisible})` }}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover pointer-events-none select-none"
                            />
                        </div>
                    ))}
                </div>

                <button 
                    onClick={nextSlide}
                    className={`absolute top-1/2 -translate-y-1/2 right-10 py-[30px] px-2.5 bg-white border hover:bg-gray-300 duration-300 cursor-pointer
                        ${currentIndex >= maxIndex ? 'opacity-30 cursor-default' : 'hover:scale-105 opacity-100' }`}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Detaily
