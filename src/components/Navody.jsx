import React from "react";
import ManualDropdown from "./ui/ManualDropdown";


const Navody = () => {
    const manualsData = [
        { id: 1, title: "MANUÁL RS / PDF", items: ["select 1", "select 2", "select 3", "select 4", "select 5"], isDark: true, arrow: "/white-arrow-down.png" },
        { id: 2, title: "MANUÁL FS / PDF", items: ["select 1", "select 2", "select 3", "select 4", "select 5"], isDark: false, arrow: "/black-arrow-down.png" },
        { id: 3, title: "TECHNICKÝ VÝKRES / PDF", items: ["select 1", "select 2", "select 3", "select 4", "select 5"], isDark: false, arrow: "/black-arrow-down.png" }
    ];

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