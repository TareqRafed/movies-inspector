interface Movie {
    id:number;
    genre_ids: number[];
    poster_path: string;
    release_date: string;
    title: string;
    vote_average: number;
}

interface Genre{
    id:number,
    name:string,
}
