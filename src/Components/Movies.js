import React, { Component } from 'react'
import axios from 'axios'


class Movies extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            movies:[]

        }
    }
    componentDidMount(){
        axios.get('https://localhost:44329/api/Movies/').then(response=>{
            this.setState({
                movies:response.data
            })
            console.log(response.data)
        })
    }
    render() {
        const {movies}=this.state
        return (
            <div><h1>Movies</h1>
        {    movies.map((movie)=><div key={movie.id}>{movie.title}</div>)} 
            </div>
        )
    }

}
export default Movies