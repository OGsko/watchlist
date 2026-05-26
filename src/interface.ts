export interface IContentOld {
    id: number;
    title: string;
}

interface IContentBase {
    id: number;
    backdrop_path: string;
    genres: GenreType[];
    overview: string;
    status: string;
    vote_average:number;
    vote_count:number;
    poster_path: string;
}

export interface IcontentMovie extends IContentBase {
    title:string;
    release_date: string;
}
export interface Icontentseries extends IContentBase {
    name:string;
    first_air_date: string;
}

export type IContent = IcontentMovie | Icontentseries


type GenreType = {
    id: number;
    name:string;
}