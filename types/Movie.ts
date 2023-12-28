export type Movie = {
    id: number,
    title: string,
    genres: {
        id: number,
        name: string
    }[],
    release_date: string,
    runtime: number | null,
    budget: number,
    production_countries: {
        iso_3166_1: string,
        name: string
    },
    overview: string,
    poster_path: string
}