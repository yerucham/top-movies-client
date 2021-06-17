import React,{useState,useEffect}from "react";    
import axios from "axios";
import {Link} from 'react-router-dom';

const TopMovies=()=> {
 const [movies,setMovie]=useState([]);
useEffect(()=>{
    loadMovies();
},[]);

const loadMovies= async ()=>
{
    const result=await  axios.get('https://localhost:44329/api/Movies/');
    console.log(result.data);
    setMovie(result.data);
    
}
return(
  <div className="container">
  <h1>Movies List</h1>
  <table className="table table-bordered">
  <thead >
    <tr>
        <th scop="col"></th>
        <th scop="col">Title</th>
        <th scop="col">Category</th>
        <th scop="col">rating</th>
        <th>Action</th>
        </tr>
  </thead>
 
  <tbody>
   {
       movies.map((movie,index)=>(
           <tr key={index}> 
               <th scope="row">{index+1}</th>
               <td>{movie.title}</td>
               <td>{movie.category}</td>
               <td>{movie.rating}</td>
               <td><img src={movie.imgUrl}></img>{movie.rating}</td>
               <td>
                   <Link className="btn btn-primary mr-2"to="/movies/add">View</Link>
                   <Link className="btn btn-outline-primary mr-2"to="/movies/add">Edit</Link> 
                   <Link className="btn btn-danger"to="/movies/add">Delete</Link> 
               </td>
           </tr>
       ))
   }
  </tbody>
</table>
<Link className="btn btn-outline-primary"to="/movies/add">Add Movie</Link>
  </div>
);
}
export default TopMovies;