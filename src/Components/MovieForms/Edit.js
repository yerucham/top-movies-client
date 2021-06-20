import React, { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import Api from '../../Utilities/Api'

const EditMovie = () => {
    let history = useHistory();
    const { id } = useParams();
    const [movie, setMovie] = useState({
        title: "",
        tategory: "",
        rating: "",
        imgUrl: "",
    });
    let { title, category, rating, imgUrl } = movie;

    const OnInputChange = (e) => {
        setMovie({ ...movie, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        loadMovie()
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault();
        await Api.updateMovie(id, movie);
        history.push("/");
    }
    const loadMovie = async () => {
        const result = await Api.getMovie(id);
        setMovie(result.data);
    }

    return (<div className="container"><div className="w-75 mx-auto shadow p-5">
        <h1>Edit Movie</h1>
        <form onSubmit={e => onSubmit(e)}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Movie Title"
                    name="title"
                    value={title}
                    onChange={e => OnInputChange(e)}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Movie Category"
                    name="category"
                    value={category}
                    onChange={e => OnInputChange(e)}
                />
            </div>
            <div className="form-group">
                <input
                    type="Number"
                    className="form-control form-control-lg"
                    placeholder="Enter Movie Rating"
                    name="rating"
                    value={rating}
                    onChange={e => OnInputChange(e)}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Set Img Url"
                    name="imgUrl"
                    value={imgUrl}
                    onChange={e => OnInputChange(e)}
                />
            </div>
            <button className="btn btn-warning btn-block">Update </button>
        </form>
    </div>
    </div>)
}
export default EditMovie;