import React from 'react';
import Card from "../../UI/Card/Card";

type MovieProps = {
    id: string;
    title: string;
    year: string;
    rated: string;
    releaseDate: string;
    runtime: string;
    genre: string;
    director: string;
}

const Movie = ({title, year, rated}: MovieProps) => {
    return (
        <Card>
            <p>Title: {title}</p>
            <p>Year: {year}</p>
            <p>Rated: {rated}</p>
        </Card>
    );
}

export default Movie;