import './App.css';
import React, { Component } from 'react';
import TopMovies from './Components/TopMovies'
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import AddMovie from './Components/MovieForms/Add'
import MovieDetails from './Components/MovieForms/MovieDetails'
import EditMovie from './Components/MovieForms/Edit'
function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-dark bg-dark">
          <ul className="navbar-nav">
            <li className="nav-item"> <NavLink className="nav-link" to="/">Home</NavLink></li>
          </ul>
          <div id="addlink" className="btn btn-outline-primary mr-2" > <NavLink to="/movies/add">Add Movie</NavLink></div>
        </nav>
        <Route exact path="/" component={TopMovies} />
        <Route path="/movies/add" component={AddMovie} />
        <Route path="/movies/edit/:id" component={EditMovie} />
        <Route path="/movies/details/:id" component={MovieDetails} />
      </Router>
    </div>
  );
}

export default App;
