import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import Title from "./ui/Title";

const Sizes = () => {
    const container = useRef();
    const titleRef = useRef();
    const mainSectionRef = useRef();

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
            y: 100,
            opacity: 0,
        }, "-=0.6") 
    }, {scope: 'container'})

    return (
        <div ref={container} className="mx-auto max-w-[1440px] px-5 mt-5 mb-30 flex flex-col sizes-md:flex-row gap-x-20 text-[#0C0D0D]">
            {/* left */}
            <div ref={titleRef} className="flex-[30%] mb-5 sizes-md:mb-0 text-center sizes-md:text-start">
                <Title title="VEĽKOSŤ BICYKLA" />
            </div>

            {/* right */}
            <div ref={mainSectionRef} className="flex-[70%] flex flex-col text-[12px] sizes-sm:text-[16px]">
                {/* grid */}
                <div className="w-full grid grid-cols-[65px_50px_repeat(3,1fr)] border-t border-gray-200">
                    <div className="py-[7px] row-span-2 border-b  border-gray-200 flex items-center">210 cm</div>
                    <div className="border-r border-b border-gray-200"></div>
                    <div className="border-r border-b border-gray-200 bg-gray-100"></div>
                    <div className="border-r border-b border-gray-200"></div>
                    <div className="border-b border-gray-200 bg-gray-100"></div>
                    <div className="border-r border-b border-gray-200"></div>
                    <div className="border-r border-b border-gray-200 bg-gray-100"></div>
                    <div className="border-r border-b border-gray-200"></div>
                    <div className="border-b border-gray-200 bg-gray-100"></div>

                    <div className="py-[7px] row-span-2 border-b  border-gray-200 flex items-center">200 cm</div>
                    <div className="border-r border-b border-gray-200"></div>
                    <div className="border-r border-b border-gray-200 bg-gray-100"></div>
                    <div className="border-r border-b border-gray-200"></div>
                    <div className=" bg-[#0C0D0D] relative z-10 ring-1 ring-[#0C0D0D]"></div>
                    <div className="border-r border-b border-gray-200"></div>
                    <div className="border-r border-b border-gray-200 bg-gray-100"></div>
                    <div className="border-r border-b border-gray-200"></div>
                    <div className="bg-[#0C0D0D] relative z-10 ring-1 ring-[#0C0D0D]"></div>

                    <div className="py-[7px] row-span-2 border-b  border-gray-200 flex items-center">190 cm</div>
                    <div className="border-r border-b border-gray-200"></div>
                    <div className="border-r border-b border-gray-200 bg-gray-100"></div>
                    <div className="border-r border-b border-gray-200"></div>
                    <div className="bg-[#0C0D0D] relative z-10 ring-1 ring-[#0C0D0D]"></div>
                    <div className="border-r border-b border-gray-200"></div>
                    <div className="border-r border-b border-gray-200 bg-gray-100"></div>
                    <div className="bg-[#0C0D0D] relative z-10 ring-1 ring-[#0C0D0D]"></div>
                    <div className="bg-[#0C0D0D] relative z-10 ring-1 ring-[#0C0D0D]"></div>

                    <div className="py-[7px] row-span-2 border-b  border-gray-200 flex items-center">180 cm</div>
                    <div className="border-r border-b border-gray-200"></div>
                    <div className="border-r border-b border-gray-200 bg-gray-100"></div>
                    <div className="bg-[#0C0D0D] relative z-10 ring-1 ring-[#0C0D0D]"></div>
                    <div className="border-b border-gray-200 bg-gray-100"></div>
                    <div className="border-r border-b border-gray-200"></div>
                    <div className="bg-[#0C0D0D] relative z-10 ring-1 ring-[#0C0D0D]"></div>
                    <div className="bg-[#0C0D0D] relative z-10 ring-1 ring-[#0C0D0D]"></div>
                    <div className="border-b border-gray-200 bg-gray-100"></div>

                    <div className="py-[7px] row-span-2 border-b  border-gray-200 flex items-center">170 cm</div>
                    <div className="border-r border-b border-gray-200"></div>
                    <div className="bg-[#0C0D0D] relative z-10 ring-1 ring-[#0C0D0D]"></div>
                    <div className="border-r border-b border-gray-200"></div>
                    <div className="border-b border-gray-200 bg-gray-100"></div>
                    <div className="border-r border-b border-gray-200"></div>
                    <div className=" bg-[#0C0D0D] relative z-10 ring-1 ring-[#0C0D0D]"></div>
                    <div className="border-r border-b border-gray-200"></div>
                    <div className="border-b border-gray-200 bg-gray-100"></div>

                    <div className="py-[7px] row-span-2 border-b  border-gray-200 flex items-center">160 cm</div>
                    <div className="border-r border-b border-gray-200"></div>
                    <div className="border-r border-b border-gray-200 bg-gray-100"></div>
                    <div className="border-r border-b border-gray-200"></div>
                    <div className="border-b border-gray-200 bg-gray-100"></div>
                    <div className="border-r border-b border-gray-200"></div>
                    <div className="border-r border-b border-gray-200 bg-gray-100"></div>
                    <div className="border-r border-b border-gray-200"></div>
                    <div className="border-b border-gray-200 bg-gray-100"></div>
                </div>
                
                {/* descr grid */}
                <div className="w-full grid grid-cols-[115px_repeat(3,1fr)] mt-2 ">
                    <img src="/motor/persone.png" alt="persone" />
                    <p>M <br />165-180 cm</p>
                    <p>L <br />175-190 cm</p>
                    <p>XL <br />185-205cm</p>
                </div>

                {/* grid text */}
                <p className="max-w-[453px] mt-2.5 text-[13px]">* Uvadzane velkosti su nami odporucane. Pred kupou dorazne odporucame fyzicky vyskusat spravnu velkost bicykla.</p>
            </div>
        </div>
    );
};

export default Sizes;
