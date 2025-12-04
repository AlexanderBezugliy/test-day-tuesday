import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import React, { useRef } from 'react'


const DhBike = () => {
    const container = useRef();
    const textRef = useRef();

    useGSAP(() => {
        const split = new SplitText(textRef.current, { type: 'words, chars' });

        gsap.from(split.chars, {
            duration: 0.6,          // Длительность анимации одной буквы
            opacity: 0,             // Начинаем с полной прозрачности
            y: 50,                  // Буквы вылетают снизу на 40px
            rotationX: -90,         // Легкий 3D поворот при появлении (очень стильно)
            stagger: 0.02,          // Задержка между появлением каждой следующей буквы (эффект волны)
            ease: 'back.out(1.5)',  // Эффект "пружинки" в конце, буква немного перелетает и возвращается

            scrollTrigger: {
                trigger: container.current,  // Триггер - весь блок компонента
                start: 'top 80%',            // Начать, когда верх блока на 80% высоты экрана
                toggleActions: 'play none none reverse', // Проигрывать вперед при скролле вниз, назад при скролле вверх
            }
        });
    }, { scope: container });

    return (
        <div ref={container} className='flex flex-col items-center my-[100px]'>
            <img src="/dh-bike/hero-bike.png" alt="hero-bike" className='max-w-[325px] max-h-[325px] bike-sm:max-w-[380px] bike-sm:max-h-[380px] bike-md:max-w-[600px] bike-md:max-h-[600px] px-5 bike-md:px-0 object-cover' />

            <div ref={textRef} className='flex flex-col max-w-[600px] px-7 bike-sm:px-[74px]'>
                <h3 className='text-center bike-md:text-start text-[#7D8082] text-[14px] mb-2.5 mt-3.5 uppercase'>Recenzia</h3>
                <p className='text-[#0C0D0D]  bike-sm:text-[20px]'>Minusove teploty, nepohoda, sneh, faktory, ktore mnohych bikerov odradia od myslienky vytiahnut bicykel a vyrazit von.</p>
            </div>
        </div>
    )
}

export default DhBike
