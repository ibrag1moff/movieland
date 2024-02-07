"use client";
// next
import { useRouter } from "next/navigation";

// react
import { FormEvent, useEffect, useState } from "react";

// icons
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchActive, setSearchActive] = useState<boolean>(false);
    const router = useRouter();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (searchQuery) {
            router.push(`/movies/search?query=${searchQuery}`);
        }
        setSearchQuery("");
    };

    useEffect(() => {
        window.addEventListener("click", () => setSearchActive(false));
    });

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="relative">
            <div className="hidden D:block">
                <input
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-gray placeholder:text-sm placeholder:CCCL:text-md rounded-lg w-[180px] CCCL:w-[220px] md:w-[320px] h-[35px] md:h-[40px] pl-2 focus:border outline-none"
                    placeholder="Search your movie..."
                    value={searchQuery}
                />
                <button className="absolute right-3 top-0 bottom-0">
                    <AiOutlineSearch size={25} />
                </button>
            </div>
            <div className="D:hidden">
                <button
                    className="relative z-30"
                    onClick={(e) => {
                        e.stopPropagation();
                        setSearchActive(!searchActive);
                    }}
                >
                    <AiOutlineSearch size={25} />
                </button>
                <div
                    className={
                        searchActive
                            ? "fixed top-0 left-0 right-0 bottom-0 bg-black/80 z-20 flex justify-center pt-16"
                            : "hidden"
                    }
                >
                    <input
                        className="bg-gray outline-none rounded-lg w-[250px] CCCL:w-[300px] h-[40px] focus:border-2 pl-2"
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        value={searchQuery}
                        placeholder="Search your movie..."
                        type="text"
                    />
                </div>
            </div>
        </form>
    );
}
