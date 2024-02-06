// next
import Link from "next/link";

// types
import { Cast } from "../types/movies";

interface CastCardProps {
    cast: Cast;
}

export default function CastCard({ cast }: CastCardProps) {
    return (
        <>
            <Link href={`/person/${cast.id}`} className="w-[100px] h-[150px]">
                {cast.profile_path ? (
                    <img
                        className="rounded-lg"
                        src={`https://www.themoviedb.org/t/p/w300/${cast.profile_path}`}
                        alt="Actor Img"
                    />
                ) : (
                    <div className="w-[100px] h-[150px] bg-main/40 rounded-lg"></div>
                )}
                <h1 className="mt-1 font-semibold text-sm w-full whitespace-nowrap text-ellipsis overflow-hidden">
                    {cast.original_name}
                </h1>
            </Link>
        </>
    );
}
