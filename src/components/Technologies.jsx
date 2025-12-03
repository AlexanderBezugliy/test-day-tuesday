import React, { useRef, useState } from 'react';

const technologyImages = [
    { id: 1, src: "/technology/img1.png", alt: "tech_1", title: 'TAPERED HEAD TUBING', descr: 'Tapered hlavová trubka má kónický tvar, ktorý je charakteristický najmä tuhosťou a pevnosťou. V hornej časti je ložisko s rozmerom 1 1/8 palca a v spodnej časti 1,5 palca. Aj takýto malý detail robí bicykel pri jazde stabilnejším a presnejším.' },
    { id: 2, src: "/technology/img2.png", alt: "tech_2", title: 'DROPPER SEATPOST', descr: 'Teleskopická sedlovka s možnosťou zasunutia do rámu. Ideálna v prípade členitého terénu. Pomocou diaľkového ovládania z riadidiel jazdec mení výšku sedla za jazdy bez nutnosti zosadať pred technickými pasážami.' },
    { id: 3, src: "/technology/img3.png", alt: "tech_3", title: 'Syntace X12', descr: 'Syntace X12 je jednoduchý systém, ktorý šetrí hmotnosť a uľahčuje montáž, demontáž kolesa a dotiahnutie len z jednej strany. Medzi hlavné výhody systému X12 patrí vyššia tuhosť zadného kolesa a spoľahlivá poloha brzdového kotúča.' },
    { id: 4, src: "/technology/img4.png", alt: "tech_4", title: 'FSS Floating', descr: 'FSS (Floating Shock Suspension) je systém pruženia, ktorý stláča plne plávajúci tlmičsimultánne z oboch strán. Tento systém tak zabraňuje zvýšenému naťahovaniu reťaze azároveň je aktívny pri brzdení, pričom účinnosť brzdenia zostáva zachovaná v plnom rozsahu.Systém FSS poskytuje plnú stabilitu a pohodlie v akýchkoľvek podmienkach a ani v prudkýchstúpaniach tak nestrácate vyvinutú silu a energiu zo šliapania. FSS tiež zabezpečuje plynulétlmenie v zjazdoch a tiež počas brzdenia či s plne zabrzdeným kolesom, kedy zostáva tlmič stáleaktívny aj pri jazde v náročnom teréne.' },
    { id: 5, src: "/technology/img1.png", alt: "tech_5", title: 'TAPERED HEAD TUBING', descr: 'Tapered hlavová trubka má kónický tvar, ktorý je charakteristický najmä tuhosťou a pevnosťou. V hornej časti je ložisko s rozmerom 1 1/8 palca a v spodnej časti 1,5 palca. Aj takýto malý detail robí bicykel pri jazde stabilnejším a presnejším.' },
    { id: 6, src: "/technology/img2.png", alt: "tech_6", title: 'DROPPER SEATPOST', descr: 'Teleskopická sedlovka s možnosťou zasunutia do rámu. Ideálna v prípade členitého terénu. Pomocou diaľkového ovládania z riadidiel jazdec mení výšku sedla za jazdy bez nutnosti zosadať pred technickými pasážami.' },

    { id: 7, src: "/technology/img1.png", alt: "tech_1", title: 'TAPERED HEAD TUBING', descr: 'Tapered hlavová trubka má kónický tvar, ktorý je charakteristický najmä tuhosťou a pevnosťou. V hornej časti je ložisko s rozmerom 1 1/8 palca a v spodnej časti 1,5 palca. Aj takýto malý detail robí bicykel pri jazde stabilnejším a presnejším.' },
    { id: 8, src: "/technology/img2.png", alt: "tech_2", title: 'DROPPER SEATPOST', descr: 'Teleskopická sedlovka s možnosťou zasunutia do rámu. Ideálna v prípade členitého terénu. Pomocou diaľkového ovládania z riadidiel jazdec mení výšku sedla za jazdy bez nutnosti zosadať pred technickými pasážami.' },
    { id: 9, src: "/technology/img3.png", alt: "tech_3", title: 'Syntace X12', descr: 'Syntace X12 je jednoduchý systém, ktorý šetrí hmotnosť a uľahčuje montáž, demontáž kolesa a dotiahnutie len z jednej strany. Medzi hlavné výhody systému X12 patrí vyššia tuhosť zadného kolesa a spoľahlivá poloha brzdového kotúča.' },
    { id: 10, src: "/technology/img4.png", alt: "tech_4", title: 'FSS Floating', descr: 'FSS (Floating Shock Suspension) je systém pruženia, ktorý stláča plne plávajúci tlmičsimultánne z oboch strán. Tento systém tak zabraňuje zvýšenému naťahovaniu reťaze azároveň je aktívny pri brzdení, pričom účinnosť brzdenia zostáva zachovaná v plnom rozsahu.Systém FSS poskytuje plnú stabilitu a pohodlie v akýchkoľvek podmienkach a ani v prudkýchstúpaniach tak nestrácate vyvinutú silu a energiu zo šliapania. FSS tiež zabezpečuje plynulétlmenie v zjazdoch a tiež počas brzdenia či s plne zabrzdeným kolesom, kedy zostáva tlmič stáleaktívny aj pri jazde v náročnom teréne.' },
    { id: 11, src: "/technology/img1.png", alt: "tech_5", title: 'TAPERED HEAD TUBING', descr: 'Tapered hlavová trubka má kónický tvar, ktorý je charakteristický najmä tuhosťou a pevnosťou. V hornej časti je ložisko s rozmerom 1 1/8 palca a v spodnej časti 1,5 palca. Aj takýto malý detail robí bicykel pri jazde stabilnejším a presnejším.' },
    { id: 12, src: "/technology/img2.png", alt: "tech_6", title: 'DROPPER SEATPOST', descr: 'Teleskopická sedlovka s možnosťou zasunutia do rámu. Ideálna v prípade členitého terénu. Pomocou diaľkového ovládania z riadidiel jazdec mení výšku sedla za jazdy bez nutnosti zosadať pred technickými pasážami.' },
];

const Technologies = () => {
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

    const scroll = (offset) => {
        sliderRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    };

    return (
        <div className='w-full bg-[#F1F1F1] select-none'>
            <div className='mx-auto max-w-[1440px] px-5 pt-5 pb-10'>
                
                <div className='flex items-center justify-between mb-[27px]'>
                    {/* title section */}
                    <h3 className='text-[#0C0D0D] text-[20px] font-medium'>TECHNOLÓGIE</h3>
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