import { MovieDetails } from "./MovieDetails";

export interface CastDetails {
    id:          number;
    name:        string;
    gender:      string;
    tmdbUrl:     string;
    profilePath: string;
    movies:      MovieDetails[];
}

// export interface Movie {
//     id:               number;
//     title:            string;
//     overview:         null;
//     tagline:          null;
//     budget:           null;
//     revenue:          null;
//     imdbUrl:          null;
//     tmdbUrl:          null;
//     posterUrl:        string;
//     backdropUrl:      null;
//     originalLanguage: null;
//     releaseDate:      string;
//     runTime:          null;
//     price:            null;
//     genres:           any[];
//     trailers:         any[];
//     casts:            any[];
// }
