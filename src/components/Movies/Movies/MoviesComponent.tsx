import React, {useState} from "react";

const MoviesComponent = (): JSX.Element => {
    const [movieName, setMovieName] = useState<string>("");
    const [movieYear, setMovieYear] = useState<string>("");
    const [moviePlot, setMoviePlot] = useState<string>("");

    const movieNameInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setMovieName(event.target.value);
    }

    const movieYearInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setMovieYear(event.target.value);
    }

    const moviePlotInputChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setMoviePlot(event.target.value);
    }

    return <nav className="level">
        <div className="level-left">
            <div className="level-item">
                <div className="field has-addons">
                    <p className="control">
                        <label className="label" htmlFor="movie-name">Name:</label>
                        <input id="movie-name"
                               className="input is-success"
                               type="text"
                               placeholder="Enter name of movie"
                               value={movieName}
                               onChange={movieNameInputChangeHandler}
                        />
                    </p>
                    <p className="control">
                        <label className="label" htmlFor="movie-year">Year:</label>
                        <input id="movie-year"
                               className="input is-success"
                               type="number"
                               min="1900"
                               max="2100"
                               placeholder="Enter year of movie"
                               value={movieYear}
                               onChange={movieYearInputChangeHandler}
                        />
                    </p>

                    <p className="control">
                        <label className="label" htmlFor="movie-plot">Plot:</label>
                        <div className="select">
                            <select onChange={moviePlotInputChangeHandler}>
                                <option selected disabled>
                                    Choose one
                                </option>
                                <option>Short</option>
                                <option>Full</option>
                            </select>
                        </div>
                    </p>

                    <p className="control">
                        <label htmlFor="search-btn" className="label">Search</label>
                        <button id="search-btn" className="button py-4" type="submit">
                            Search
                        </button>
                    </p>
                </div>
            </div>
        </div>



        <div className="level-right">
            <p className="level-item"><button className="button is-dark"><strong>All</strong></button></p>
            <p className="level-item"><button className="button is-light">Sort by Name (Ascending)</button></p>
            <p className="level-item"><button className="button is-light">Sort by Name (Descending)</button></p>
        </div>
    </nav>;
};

export default MoviesComponent;