import React, {Component} from 'react';
import TopMovies from './Components/TopMovies'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AddMovie from './Components/MovieForms/Add'
function App() {
  return ( 
      <div className="App">
       <Router>
        <Route exact path="/"component={TopMovies} />
        <Route path="/movies/add" component={AddMovie} />         
        </Router>       
      </div>
  );
}

export default App;
