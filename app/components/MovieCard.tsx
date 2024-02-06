"use client";
// next & react
import Link from "next/link";
import { useEffect, useState } from "react";

// types
import { Data } from "../types/movies";

// icons
import { BsFillStarFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";

// skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface MovieCardProps {
    data: Data;
}

export default function MovieCard({ data }: MovieCardProps) {
    const roundedVoteAverage = data?.vote_average?.toFixed(1);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            {loading ? (
                <div className="flex flex-col gap-1">
                    <Skeleton width={230} height={344} borderRadius={12} />
                    <Skeleton width={230} height={28} borderRadius={12} />
                    <Skeleton width={230} height={32} borderRadius={12} />
                </div>
            ) : (
                <div className="flex items-center justify-center md:block">
                    <Link
                        href={
                            data?.title
                                ? `/movies/${data?.id}`
                                : `/series/${data?.id}`
                        }
                        className="flex flex-col gap-1  w-[270px] md:w-[230px]"
                    >
                        <div className="relative group">
                            <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-transparent  group-hover:bg-black/80 transition-all duration-300">
                                <Link
                                    className="flex items-center justify-center h-full scale-0 group-hover:scale-100 transition-all duration-300"
                                    href={
                                        data?.title
                                            ? `/movies/${data?.id}`
                                            : `/series/${data?.id}`
                                    }
                                >
                                    <button className="bg-main p-4 rounded-full">
                                        <FaPlay size={25} />
                                    </button>
                                </Link>
                            </div>
                            {data?.poster_path ? (
                                <img
                                    className="w-[280px] md:w-[230px] rounded-xl shadow cursor-pointer"
                                    src={`https://www.themoviedb.org/t/p/w1280/${data.poster_path}`}
                                    alt="Movie Poster"
                                />
                            ) : (
                                <div className="w-[280px] md:w-[230px] h-[345px] bg-main/30 rounded-xl shadow cursor-pointer"></div>
                            )}
                        </div>
                        <h4 className="text-xl font-bold w-full whitespace-nowrap text-ellipsis overflow-hidden">
                            {data?.title ? data?.title : data?.name}
                        </h4>
                        <div className="flex items-center justify-between w-full">
                            <span className="flex items-center gap-1">
                                {roundedVoteAverage}
                                <span>
                                    <BsFillStarFill color="#000" size={15} />
                                </span>
                            </span>
                            <div className="font-medium bg-gray py-1 px-3 rounded-xl">
                                {data?.title
                                    ? data?.release_date?.slice(0, 4)
                                    : data?.first_air_date?.slice(0, 4)}
                            </div>
                        </div>
                    </Link>
                </div>
            )}
        </>
    );
}
