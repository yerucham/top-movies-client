import React, { useState, useEffect } from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom';

const AddMovie = () => {
    let history=useHistory();
    const [movie, setMovie  ] = useState({
        Title:"",
        Category:"",
        Rating:"",
        ImgUrl:"",
    });
const {Title,Category,Rating ,ImgUrl}=movie;

    const OnInputChange=(e)=>
    {
       setMovie({...movie,[e.target.name ]:e.target.value});
    };
    
    const onSubmit=async (e)=>{
         e.preventDefault();
         await axios.post("https://localhost:44329/api/Movies/",movie);
         history.push("/"); 
          
    }
    return (<div className="container"><div className="w-75 mx-auto shadow p-5">
        <h1>Add Movie</h1>
        <form onSubmit={e=>onSubmit(e)}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Movie Title"
                    name="Title"
                    value={Title}
                    onChange={e=>OnInputChange(e)}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Movie Category"
                    name="Category"
                    value={Category}
                    onChange={e=>OnInputChange(e)}
                />
            </div>
            <div className="form-group">
                <input
                    type="Number"
                    className="form-control form-control-lg"
                    placeholder="Enter Movie Rating"
                    name="Rating"
                    value={Rating}
                    onChange={e=>OnInputChange(e)}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Set Img Url"
                    name="ImgUrl"
                    value={ImgUrl}
                    onChange={e=>OnInputChange(e)} 
                />
            </div>
            <button className="btn btn-primary btn-block">Add </button>
        </form>
    </div>
    </div>)
}
export default AddMovie;