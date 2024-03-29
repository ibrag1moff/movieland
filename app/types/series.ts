export type Series = {
    adult: boolean;
    backdrop_path: string;
    id: number;
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

export type SeriesDetails = {
    adult: boolean;
    backdrop_path: string;
    created_by: [];
    episode_run_time: [];
    first_air_date: string;
    genres: [];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: [];
    last_air_date: string;
    last_episode_to_air: {
        id: number;
        name: string;
        overview: string;
        vote_average: number;
        vote_count: number;
        air_date: string;
        episode_number: number;
        episode_type: string;
        production_code: string;
        runtime: number;
        season_number: number;
        show_id: number;
        still_path: string;
    };
    name: string;
    next_episode_to_air: null;
    networks: [];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: [];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: [];
    production_countries: [];
    seasons: [];
    spoken_languages: [];
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;
    credits: any;
};
