import { Movie } from "./Movie";

export interface Cast{
    id:number;
    name:string;
    gender:boolean;
    tmdbUrl:string;
    profilePath:string;
    movies:Movie[];
}