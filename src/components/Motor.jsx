import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'



const Motor = () => {
    const container = useRef();
    const titleRef = useRef();      
    const mainSectionRef = useRef(); 
    const detailsRef = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power3.out", duration: 1 },
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
        .from(mainSectionRef.current, {
                x: -100,
                opacity: 0,
            }, "-=0.6") 
        .from(detailsRef.current, {
            x: -100,
            opacity: 0,
        }, "-=0.6")
    }, { scope: container });

    return (
        <div id='e-bicykle' className='w-full pt-5 bg-[#0C0D0D] text-white'>
            <div ref={container} className='mx-auto max-w-[1440px] px-5 gap-x-20  flex flex-col motor-md:flex-row'>
                {/* left */}
                <div ref={titleRef} className='flex-[30%]'>
                    <h3 className='mb-4 text-[20px] font-medium text-center specific-xl:text-start specific-xl:mb-0'>MOTOR A BATÉRIA</h3>
                </div>

                {/* right */}
                <div className='flex-[70%] flex flex-col items-center motor-md:block'>
                    <div ref={mainSectionRef}>
                        <h3 className='text-[20px] font-medium'>SHIMANO STEPS EP8</h3>
                        <img src="/motor/img1.png" alt="main-img" className='mt-[30px] mb-[43px] object-cover' />
                    </div>

                    <div ref={detailsRef} className='flex flex-col motor-xl:flex-row justify-between gap-10 motor-md:gap-[7px] motor-xl:gap-[45px] pb-28'>
                        <div className='flex flex-col motor-md:max-w-[430px] space-y-5'>
                            <img src="/motor/img2.png" alt="icon-lft" className='w-10 h-10' />
                            
                            <h4 className='font-medium'>250W motor STEPS EP8</h4>
                            <p>Silný a zároveň ľahký motor navrhnutý pre optimálny <br /> prenos sily.</p>
                            
                            <div>
                                <p>váha menej ako 2,5 kg</p>
                                <span>krútiaci moment až 85Nm</span>
                            </div>
                        </div>

                        <div className='flex flex-col motor-md:max-w-[430px] space-y-5'>
                            <img src="/motor/img3.png" alt="icon-right" className='w-10 h-10' />
                            
                            <h4 className='font-medium'>630 Wh batéria Shimano BT-E8036</h4>
                            <p>Výkonná Li-Ion batéria s vysokou kapacitou a funkciou rýchlonabíjania Vás dostane tam ...... a späť!</p>
                            
                            <div>
                                <p>dojazd až do 100km</p>
                                <span>1000 nabíjacích cyklov bez výraznejšej straty kapacity</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Motor;
