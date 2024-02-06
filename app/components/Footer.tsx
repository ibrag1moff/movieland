// icons
import { BsArrowUp } from "react-icons/bs";

export default function Footer() {
    const socials = [
        {
            name: "Instagram",
            href: "https://github.com/ibrag1moff/",
            id: 1,
        },
        {
            name: "Facebook",
            href: "https://github.com/ibrag1moff/",
            id: 2,
        },
        {
            name: "Twitter",
            href: "https://github.com/ibrag1moff/",
            id: 3,
        },
        {
            name: "LinkedIn",
            href: "https://github.com/ibrag1moff/",
            id: 4,
        },
    ];

    return (
        <>
            <div className="relative w-full flex items-center justify-between bg-black border-t  border-gray py-3 z-30 px-4 D:px-8 md:px-12">
                <h3 className="font-semibold ">
                    Created by <span className="text-main">ibrag1moff.</span>
                </h3>
                <a className="bg-main p-3 rounded-full" href="#">
                    <BsArrowUp size={25} />
                </a>
            </div>
        </>
    );
}
