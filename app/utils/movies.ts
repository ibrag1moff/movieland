const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getTrendingMovies = async () => {
    try {
        const res = await fetch(
            `${BASE_URL}/trending/movie/week?language=en-US&api_key=${API_KEY}`
        );
        const data = await res.json();
        return data.results;
    } catch (error) {
        console.log(error);
    }
};

export const getTrendingSeries = async () => {
    try {
        const res = await fetch(
            `${BASE_URL}/trending/tv/week?language=en-US&api_key=${API_KEY}`
        );
        const data = await res.json();
        return data.results;
    } catch (error) {
        console.log(error);
    }
};

export const getTopRatedSeries = async () => {
    try {
        const res = await fetch(
            `${BASE_URL}/tv/top_rated?language=en-US&page=1&api_key=${API_KEY}`
        );
        const data = await res.json();
        return data.results;
    } catch (error) {
        console.log(error);
    }
};

export const getUpcomingMovies = async () => {
    try {
        const res = await fetch(
            `${BASE_URL}/movie/upcoming?language=en-US&page=1
            &api_key=${API_KEY}`
        );
        const data = await res.json();
        return data.results;
    } catch (error) {
        console.log(error);
    }
};
export const getMovies = async (query: string) => {
    try {
        const res = await fetch(
            `${BASE_URL}/search/multi?query=${query}&include_adult=false&language=en-US&api_key=${API_KEY}`
        );
        const data = await res.json();
        return data.results;
    } catch (error) {
        console.log(error);
    }
};

export const getMovieDetails = async (id: number) => {
    try {
        const res = await fetch(
            `${BASE_URL}/movie/${id}?language=en-US&append_to_response=credits&api_key=${API_KEY}`
        );
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getSeriesDetails = async (id: number) => {
    try {
        const res = await fetch(
            `${BASE_URL}/tv/${id}?language=en-US&append_to_response=credits&api_key=${API_KEY}`
        );
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getMovieVideo = async (id: number) => {
    try {
        const res = await fetch(
            `${BASE_URL}/movie/${id}/videos?language=en-US&api_key=${API_KEY}`
        );
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getSeriesVideo = async (id: number) => {
    try {
        const res = await fetch(
            `${BASE_URL}/tv/${id}/videos?language=en-US&api_key=${API_KEY}`
        );
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getSimilarMovies = async (id: number) => {
    try {
        const res = await fetch(
            `${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}`
        );
        const data = await res.json();
        return data.results;
    } catch (error) {
        console.log(error);
    }
};

export const getSimilarSeries = async (id: number) => {
    try {
        const res = await fetch(
            `${BASE_URL}/tv/${id}/recommendations?api_key=${API_KEY}`
        );
        const data = await res.json();
        return data.results;
    } catch (error) {
        console.log(error);
    }
};

export const getMovieGenres = async () => {
    try {
        const res = await fetch(
            `${BASE_URL}/genre/movie/list?language=en&api_key=${API_KEY}`
        );
        const data = await res.json();
        return data.genres;
    } catch (error) {
        console.log(error);
    }
};

export const getMovieByGenre = async (id: number) => {
    try {
        const res = await fetch(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${id}`
        );
        const data = await res.json();
        return data.results;
    } catch (error) {
        console.log(error);
    }
};

export const getPersonDetails = async (id: number) => {
    try {
        const res = await fetch(
            `${BASE_URL}/person/${id}?append_to_response=credits&language=en-US&api_key=${API_KEY}`
        );
        const data = res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};
