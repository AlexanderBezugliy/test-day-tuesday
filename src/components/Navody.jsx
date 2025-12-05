import React from "react";
import ManualDropdown from "./ui/ManualDropdown";
import { manualsData } from "../assets";


const Navody = () => {
    return (
        <div className="w-full border-t border-[#D8D9DA] mb-[100px] ">
            <div className="mx-auto max-w-[1440px] px-5 mt-5 flex flex-col text-[#0C0D0D]">
                <div className="flex flex-col sizes-md:flex-row gap-5">
                    {/* left */}
                    <div className="flex-[30%] mb-5 sizes-md:mb-0 text-center sizes-md:text-start">
                        <h3 className="text-[20px] font-medium mb-[30px]">NÁVODY</h3>
                    </div>

                    {/* right */}
                    <div className="flex-[70%] ">
                        <div className="grid sizes-md:grid-cols-2 gap-5">
                            {manualsData.map((manual) => (
                                <ManualDropdown 
                                    key={manual.id}
                                    title={manual.title}
                                    items={manual.items}
                                    isDark={manual.isDark}
                                    arrow={manual.arrow}
                                />
                            ))}
                        </div>

                        <p className="mt-5 text-[#333333] text-[12px]">V prípade potreby odporúčame si stiahnuť priložený manuál.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navody;