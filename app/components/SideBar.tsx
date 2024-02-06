// next
import Link from "next/link";

// utils
import { getMovieGenres } from "../utils/movies";

// types
import { Genre } from "../types/movies";

export default async function SideBar() {
    const genres = await getMovieGenres();

    const socials = [
        {
            name: "Instagram",
            id: 1,
            href: "https://github.com/ibrag1moff/",
        },
        {
            name: "Telegram",
            id: 2,
            href: "https://github.com/ibrag1moff/",
        },
        {
            name: "Twitter",
            id: 3,
            href: "https://github.com/ibrag1moff/",
        },
        {
            name: "Facebook",
            id: 4,
            href: "https://github.com/ibrag1moff/",
        },
        {
            name: "LinkedIn",
            id: 5,
            href: "https://github.com/ibrag1moff/",
        },
    ];

    return (
        <div className="md:fixed scrollbar md:h-screen md:w-[200px] DCCC:w-[250px] md:bg-black z-10  md:py-24 md:px-9 mt-16 md:mt-12">
            <div className="flex flex-col">
                <h1 className="font-semibold text-xl mb-6 px-3 mt-4 md:px-0">
                    Genres
                </h1>
                <div className="flex items-center justify-center md:items-start md:justify-start  flex-wrap md:flex-col gap-4 px-3 md:px-0">
                    {genres?.map((genre: Genre) => (
                        <Link
                            className="border border-main py-1 px-2 md:border-none md:p-0 rounded-full text-[#A9A9A9] md:hover:text-main transition-colors duration-200"
                            key={genre.id}
                            href={`/genres/${genre.id}`}
                        >
                            {genre.name}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="hidden md:flex flex-col mt-12">
                <h1 className="font-semibold text-xl mb-6 px-3 md:px-0">
                    Our socials
                </h1>
                <div className="flex items-center justify-center md:items-start md:justify-start  flex-wrap md:flex-col gap-4 px-3 md:px-0">
                    {socials.map((social) => (
                        <a
                            className="border-2 border-main p-2 rounded-3xl md:border-none md:p-0 md:rounded-none md:text-[#A9A9A9] md:hover:text-main transition-colors duration-200"
                            key={social.id}
                            href={social.href}
                        >
                            {social.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
