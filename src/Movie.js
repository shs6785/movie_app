import React, { Component } from 'react';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'



class Movie extends Component  {

    render() {
        return(
            <div className = "Movie">
                <div className="Movie__Column">
                    <MoviePoster poster={this.props.poster} alt={this.props.title}/> 
                </div>
                <div className="Movie__Column">
                    <h1>{this.props.title}</h1>
                    <div className="Movie__Genres">
                        {this.props.genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
                    </div>
                    <div className="Movie__Synopsis">
                    <LinesEllipsis
                        text={this.props.synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                    </div>
                </div>
            </div>
        
        )
    }
}


class MoviePoster extends Component {
    render(){
        return (
            <img src = {this.props.poster} alt="Movie Poster" className="Movie__Poster"/>
        )
    }
}

class MovieGenre extends Component {
    render(){
        return (
            <span className="Movie__Genre">
                {this.props.genres}
            </span>
        )
    }
}

export default Movie