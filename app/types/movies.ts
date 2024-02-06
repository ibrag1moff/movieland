export type Movie = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: [];
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: string;
    poster_path: string;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

export type Data = {
    adult: boolean;
    backdrop_path: string;
    id: number;
    title: string;
    original_title: string;
    release_date: string;
    video: boolean;
    name: string;
    original_language: string;
    original_name: string;
    overview: string;
    poster_path: string;
    media_type: string;
    genre_ids: [];
    popularity: string;
    first_air_date: string;
    vote_average: number;
    vote_count: number;
    origin_country: [];
};

export type MovieDetails = {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: null;
    budget: number;
    genres: [];
    homepage: string;
    id: number;
    imdb_id: string;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    genre_ids: [];
    production_companies: [];
    production_countries: [];
    revenue: number;
    runtime: number;
    spoken_languages: [];
    status: string;
    tagline: string;
    credits: any;
    popularity: string;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

export type Video = {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
};

export interface Cast {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
}

export type Genre = {
    id: number;
    name: string;
};
