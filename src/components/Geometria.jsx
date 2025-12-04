import React, { useRef } from 'react'
import Title from './ui/Title';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { geometryData } from '../assets';



const Geometria = () => {
    const container = useRef();
    const titleRef = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power1.out", duration: 1 },
            scrollTrigger: {
                trigger: container.current,
                start: 'top 90%',
                toggleActions: 'play none none reverse',
            }
        });

        tl.from(titleRef.current, {
            x: -100, 
            opacity: 0,
        })
        .from('.left-section-animate', {
            x: 140,
            opacity: 0,
        }) 
        .from('.right-section-animate', {
            x: -140,
            opacity: 0,
        }, "<") 
    }, { scope: container }) 


    return (
        <div className='w-full mb-25 overflow-hidden border-t border-[#D8D9DA]'>
            <div ref={container} className="mx-auto max-w-[1440px] px-5 mt-5 flex flex-col sizes-md:flex-row gap-5 text-[#0C0D0D]">
                {/* left */}
                <div className="flex-[33%] mb-5 sizes-md:mb-0 text-center sizes-md:text-start">
                    <div ref={titleRef} className='mb-[30px]'>
                        <Title title="GEOMETRIA" />
                    </div>

                    <div className='left-section-animate   flex justify-center sizes-md:block'>
                        <img src="/geometria/geom.png" alt="geom-img" />
                    </div>
                </div>

                {/* right */}
                <div className="right-section-animate   flex-[70%] flex flex-col text-[11px] geom-md:text-[16px]">
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
