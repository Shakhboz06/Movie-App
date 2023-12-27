import {type Movie } from "./Movie"

export type response = {
    page: number,
    results: Movie[],
    total_pages: number,
    total_results: number,
}