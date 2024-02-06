"use client";
// react player
import ReactPlayer from "react-player";

// types
import { Video } from "../types/movies";

interface VideoProps {
    id: number;
    results: [];
}

interface Videos {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    official: boolean;
    published_at: string;
    site: string;
    size: number;
    type: string;
}

export default function Video({ id, results }: VideoProps) {
    const trailer = results?.filter((x: Videos) => x.type == "Trailer");
    const key = trailer?.map((x: Videos) => x.key);

    return (
        <div className="my-28 relative z-20">
            {results?.length ? (
                <div className="flex flex-col px-2">
                    <h1 className="font-bold text-center text-4xl mb-10 D:text-5xl">
                        Trailers & Clips
                    </h1>
                    <div className="md:w-[600px] md:mx-auto">
                        <ReactPlayer
                            width="100%"
                            controls
                            url={`https://www.youtube.com/watch?v=${key}`}
                        />
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}
