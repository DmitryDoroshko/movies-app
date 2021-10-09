import {FETCH_MOVIES_URL} from "../constants/urls";
import {MOVIES_API_KEY} from "../constants/api";

export async function fetchAllMovies<T>(url: string = FETCH_MOVIES_URL): Promise<T>  {
    const fetchUrlCorrectFormat = `${url}&apikey=${MOVIES_API_KEY}`;
    const response: Response = await fetch(fetchUrlCorrectFormat);
    if (!response.ok) {
        throw new Error(`${response.status}`);
    }
    return await response.json();
}

export async function fetchMoviesByName<T>(url: string = FETCH_MOVIES_URL, moviesName: string): Promise<T> {
    const moviesNameCorrectFormat: string = moviesName.trim().split(" ").join("+");
    const fetchUrlCorrectFormat: string = `url/?t=${moviesNameCorrectFormat}&apikey=${MOVIES_API_KEY}`;
    const response: Response = await fetch(fetchUrlCorrectFormat);

    if (!response.ok) {
        throw new Error(`${response.status}`);
    }

    return await response.json();
}

export async function fetchMoviesByNameAndYear<T>(url: string = FETCH_MOVIES_URL, moviesName: string, year: number): Promise<T> {
    const moviesNameCorrectFormat: string = moviesName.trim().split(" ").join("+");
    const fetchUrlCorrectFormat: string = `url/?t=${moviesNameCorrectFormat}&y=${year}&apikey=${MOVIES_API_KEY}`;
    const response: Response = await fetch(fetchUrlCorrectFormat);

    if (!response.ok) {
        throw new Error(`${response.status}`);
    }

    return await response.json();
}

export async function fetchMoviesByNameAndYearAndPlot<T>(url: string = FETCH_MOVIES_URL, moviesName: string, year: number, plot: string = "full"): Promise<T> {
    const moviesNameCorrectFormat: string = moviesName.trim().split(" ").join("+");
    const fetchUrlCorrectFormat: string = `url/?t=${moviesNameCorrectFormat}&y=${year}&plot=${plot}&apikey=${MOVIES_API_KEY}`;
    const response: Response = await fetch(fetchUrlCorrectFormat);

    if (!response.ok) {
        throw new Error(`${response.status}`);
    }

    return await response.json();
}