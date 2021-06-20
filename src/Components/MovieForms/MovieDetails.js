import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams, Link } from 'react-router-dom';
import Api from '../../Utilities/Api'

const MovieDetails = () => {
    let history = useHistory();
    const { id } = useParams();
    const [movie, setMovie] = useState({
        title: "",
        tategory: "",
        rating: "",
        imgUrl: "",
    });

    useEffect(() => {
        loadMovie()
    }, [])

    const loadMovie = async () => {
        const result = await Api.getMovie(id);
        setMovie(result.data);
    }

    return (
        <div  className="container">
            <h4 id="movietitle" className="display-4">Movie Id:{movie.id}</h4>
           <br></br>
            <ul className="list-group-w-50">
                <li className="list-group-item"><b>Title</b>: {movie.title}</li>
                <li className="list-group-item"><b>category</b>: {movie.category}</li>
                <li className="list-group-item"><b>rating</b>: {movie.rating}</li>
                <li className="list-group-item"><b>imgUrl</b>: {movie.imgUrl}</li>
            </ul>
           <div id="btn_back"><Link className="btn btn-primary" to="/">back To List</Link></div> 
        </div>

    )
}
export default MovieDetails;