// utils
import { getMovieByGenre } from "@/app/utils/movies";

// types
import { Data } from "@/app/types/movies";

// components
import MovieCard from "@/app/components/MovieCard";

interface MovieFoundByGenreProps {
    params: any;
}

export default async function MovieFoundByGenre({
    params,
}: MovieFoundByGenreProps) {
    let { id } = params;
    id = Number(id);

    const movies = await getMovieByGenre(id);

    return (
        <div className="relative z-10">
            <div className="pt-24 pb-9 px-4">
                {movies?.length > 0 ? (
                    <div>
                        <h1 className="text-2xl font-bold text-center mb-8 D:text-3xl md:text-5xl">
                            Genre <span className="text-main">results</span>
                        </h1>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-x-4 gap-y-8 px-2">
                            {movies?.map((data: Data) => (
                                <MovieCard key={data.id} data={data} />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="h-screen">
                        <h1 className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-center text-4xl md:text-5xl font-bold">
                            No movies <span className="text-main">found</span>
                        </h1>
                    </div>
                )}
            </div>
        </div>
    );
}
