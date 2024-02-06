// utils
import { getMovies } from "@/app/utils/movies";

// components
import MovieCard from "@/app/components/MovieCard";

interface SearchPageProps {
    searchParams: any;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
    const { query } = searchParams;
    const results = await getMovies(query);
    return (
        <div className="pt-24 pb-9 px-4">
            {results?.length > 0 ? (
                <div>
                    <h1 className="text-2xl font-bold text-center mb-8 D:text-3xl md:pl-4">
                        Search Results for <q className="text-main">{query}</q>
                    </h1>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-x-4 gap-y-8 px-2">
                        {results.map((data: any) => (
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
    );
}
