"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Nav = () => {
    const [active, setActive] = useState("Home");

    // Menu items array
    const menus = [
        { name: "Home", route: "/" },
        { name: "About", route: "/about" },
        { name: "Services", route: "/services" },
        { name: "Resume", route: "/resume" },
        { name: "Projects", route: "/projects" },
        { name: "Contact", route: "/contact" },
    ];

    // Split menus into two parts
    const firstPart = menus.slice(0, 3);
    const secondPart = menus.slice(3);


    return (
        <div className="bg-black px-2 py-2 flex items-center justify-between rounded-full text-white fixed top-4 left-1/2 transform -translate-x-1/2 z-10 w-full  max-w-[1400px]">
            {/* Display first part of menus */}
            <div className="flex items-center gap-4 lg:gap-10 font-lugfa">
                {firstPart.map((menu) => (
                    <Link
                        key={menu.name}
                        href={menu.route}
                        onClick={() => setActive(menu.name)}
                        className={`px-6 py-3 transition-all duration-300 ${
                            active === menu.name ? "bg-primary rounded-full font-bold" : ""
                        }`}
                    >
                        {menu.name}
                    </Link>
                ))}
            </div>

            {/* Center text */}
            <div className="text-white text-xl font-bold cursor-pointer">
                JCREA
            </div>

            {/* Display second part of menus */}
            <div className="flex items-center gap-4 lg:gap-10 font-lugfa">
                {secondPart.map((menu) => (
                    <Link
                        key={menu.name}
                        href={menu.route}
                        onClick={() => setActive(menu.name)}
                        className={`px-6 py-3 transition-all duration-300 ${
                            active === menu.name ? "bg-primary rounded-full font-bold" : ""
                        }`}
                    >
                        {menu.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Nav;
