import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Api from '../Utilities/Api'

const TopMovies = () => {
    const [movies, setMovie] = useState([]);

    useEffect(() => {
        loadMovies();
    }, []);

    const loadMovies = async () => {
        const result = await Api.getAllMovies();
        setMovie(result.data);
    }
    const deleteMovie = async (id) => {
        await Api.deleteMovie(id);
        loadMovies();
    }
    return (
        <div className="container">
            <br></br>
            <ul id="movieslist">
                {
                    movies.map((movie, index) => (
                        <div className="movie-card">
                            <li >
                                <h4>{index + 1}</h4>
                                <h3>{movie.title}</h3><p><img className="movieImg" src={movie.imgUrl} alt={`${movie.title}`} width="220" height="220" /></p>
                                <p> <Link className="btn btn-primary mr-2" to={`/movies/details/${movie.id}`}>View</Link>
                                    <Link className="btn btn-outline-primary mr-2" to={`/movies/edit/${movie.id}`}>Edit</Link>
                                    <button className="btn btn-danger" onClick={() => deleteMovie(movie.id)}>Delete</button>
                                </p>
                            </li>
                        </div>
                    ))
                }
            </ul>

        </div>
    );
}
export default TopMovies;