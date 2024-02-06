// utils
import {
    getMovieDetails,
    getMovieVideo,
    getSimilarMovies,
} from "@/app/utils/movies";

// types
import { MovieDetails, Cast, Data } from "@/app/types/movies";

// icons
import { BsFillStarFill } from "react-icons/bs";

// components
import Video from "@/app/components/Video";
import MovieCard from "@/app/components/MovieCard";
import CastCard from "@/app/components/CastCard";
import Link from "next/link";

interface MovieDetailsProps {
    params: any;
}

interface Genres {
    id: number;
    name: string;
}

export default async function MovieDetails({ params }: MovieDetailsProps) {
    let { id } = params;
    id = Number(id);
    const movieDetails: MovieDetails = await getMovieDetails(id);

    const roundedVoteAverage = movieDetails.vote_average.toFixed(1);

    const cast = movieDetails.credits.cast;

    const video = await getMovieVideo(id);

    const similarMovies = await getSimilarMovies(id);

    return (
        <div className="pt-16">
            <div className="absolute w-full h-full z-10 bg-black/95"></div>
            <img
                className="absolute w-full h-full object-cover"
                src={
                    `https://www.themoviedb.org/t/p/w1280/${movieDetails.backdrop_path}` ||
                    "/next.svg"
                }
                alt="Movie Poster"
            />
            <div className="relative z-10 md:mt-10 flex flex-col md:flex-row md:items-center md:justify-evenly items-center justify-center py-8">
                {movieDetails.poster_path ? (
                    <img
                        className="w-[300px] rounded-3xl mb-3 px-2"
                        src={
                            `https://www.themoviedb.org/t/p/w300/${movieDetails.poster_path}` ||
                            "/next.svg"
                        }
                        alt="Movie Main Poster"
                    />
                ) : (
                    <div className="w-[300px] rounded-3xl h-[400px] bg-main"></div>
                )}
                <div className="flex flex-col items-center gap-4">
                    <h1 className="font-bold text-3xl text-center max-w-[300px] md:max-w-[500px] md:text-4xl">
                        {movieDetails.title}
                    </h1>

                    <div className="flex items-center gap-8 justify-between">
                        <span className="flex items-center gap-1 text-[#A9A9A9] font-medium">
                            <span>
                                <BsFillStarFill color="#000" size={15} />
                            </span>
                            {roundedVoteAverage}
                        </span>
                        <span className="text-[#A9A9A9] font-medium">
                            {movieDetails.runtime}m
                        </span>
                        <span className="font-medium text-[#A9A9A9]">
                            {movieDetails.release_date}
                        </span>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                        {movieDetails.genres.map((genre: Genres) => (
                            <Link
                                href={`/genres/${genre.id}`}
                                className="font-medium text-lg text-[#a9a9a9] underline xl:hover:text-main transition-all duration-300"
                                key={genre.id}
                            >
                                {genre.name}
                            </Link>
                        ))}
                    </div>
                    <>
                        {movieDetails.tagline && (
                            <div className="flex flex-col items-center">
                                <h1 className="font-medium text-[#a9a9a9]">
                                    Tagline:
                                </h1>
                                <span className="font-bold text-center">
                                    {movieDetails.tagline}
                                </span>
                            </div>
                        )}
                    </>
                    <>
                        {movieDetails.status && (
                            <div className="flex items-center gap-2">
                                <h1 className="font-medium text-[#a9a9a9]">
                                    Status:
                                </h1>
                                <span className="font-bold">
                                    {movieDetails.status}
                                </span>
                            </div>
                        )}
                    </>
                    <p className="max-w-[250px] D:max-w-[450px] text-center mx-auto font-medium">
                        {movieDetails.overview}
                    </p>
                </div>
            </div>
            {cast.length && (
                <div className="relative z-20 my-12 md:my-4 MCC:my-[200px]">
                    <h1 className="text-center font-bold text-4xl mb-6 D:text-5xl">
                        Actors
                    </h1>
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-14 mx-8">
                        {cast.slice(0, 9).map((cast: Cast) => (
                            <CastCard key={cast.id} cast={cast} />
                        ))}
                    </div>
                </div>
            )}
            <Video {...video} />
            {similarMovies?.length ? (
                <div className="py-12">
                    <h1 className="flex flex-wrap items-center justify-center font-bold text-3xl CCCL:text-4xl md:text-center md:text-5xl px-2 mb-8">
                        You may also like
                    </h1>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center md:items-start md:justify-center gap-4 px-2">
                        {similarMovies.slice(0, 5).map((data: Data) => (
                            <MovieCard key={data.id} data={data} />
                        ))}
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}
