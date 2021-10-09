import React from "react";

type MovieModalProps = {
    id: string;
    title: string;
    year: string;
    rated: string;
    releaseDate: string;
    runtime: string;
    genre: string;
    director: string;
}

const MovieModal = ({id, title, year, rated, releaseDate, runtime, genre, director}: MovieModalProps) => {
    return (
        <div className="modal">
            <div className="modal-background">
            </div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Movie {title}</p>
                    <button className="delete" aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    <p>iMBD id: {id}</p>
                    <p>Title: {title}</p>
                    <p>Year: {year}</p>
                    <p>Rated: {rated}</p>
                    <p>Release date: {releaseDate}</p>
                    <p>Runtime: {runtime}</p>
                    <p>Genre: {genre}</p>
                    <p>Director: {director}</p>
                </section>
                <footer className="modal-card-foot">
                    <button className="button">Cancel</button>
                </footer>
            </div>
        </div>
    );
};

export default MovieModal;
