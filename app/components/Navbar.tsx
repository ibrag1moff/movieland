"use client";
// next & react
import Link from "next/link";
import { useState, useEffect } from "react";

// components
import SearchBar from "./SearchBar";

export default function Navbar() {
    // for adding a style to navbar while scrolling
    const [active, setActive] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("scroll", () =>
            window.scrollY > 40 ? setActive(true) : setActive(false)
        );
    });

    return (
        <nav
            className={
                active
                    ? "fixed w-full z-40 flex items-center justify-between p-4 bg-black  border-b border-gray"
                    : "fixed w-full z-40 flex items-center justify-between p-4 bg-black"
            }
        >
            <Link className="font-bold text-2xl" href="/">
                M<span className="text-main text-2xl">LAND</span>
            </Link>
            <SearchBar />
        </nav>
    );
}
