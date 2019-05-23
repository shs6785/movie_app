import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';


class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {
 
  }

  componentDidMount(){
    console.log("component")
    this._getMovies();
  }  


   _getMovies = async () => {
    console.log("getmovies")
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _renderMovies = () => {
    console.log("rendermovies")

    const movies = this.state.movies.map((movie, index) => {
      return <Movie 
          title = {movie.title}
          poster = {movie.medium_cover_image} 
          genres = {movie.genres}
          synopsis= {movie.synopsis}
          key = {movie.id}  
          />
    })
    return movies
  }


  _callApi = () => {
    console.log("callapi")
    return fetch('https://yts.am/api/v2/list_movies.json?sort by =rating')
    .then(res => res.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    console.log("render")
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'loding'}
      </div>
    );
  }
}



export default App;
