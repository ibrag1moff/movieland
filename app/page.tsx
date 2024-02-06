// utils
import {
    getTopRatedSeries,
    getTrendingMovies,
    getTrendingSeries,
} from "./utils/movies";

// components
import SideBar from "./components/SideBar";
import MovieSection from "./components/MovieSection";

export default async function Home() {
    const trendingMovies = await getTrendingMovies();
    const trendingSeries = await getTrendingSeries();
    const topRatedSeries = await getTopRatedSeries();

    console.log(trendingSeries);

    return (
        <div className="flex flex-col gap-3">
            <SideBar />
            <div className="flex flex-col md:ml-[220px] DCCC:ml-[280px]">
                <MovieSection title="Trending movies" data={trendingMovies} />
                <MovieSection title="Trending series" data={trendingSeries} />
                <MovieSection title="Top Rated series" data={topRatedSeries} />
            </div>
        </div>
    );
}
