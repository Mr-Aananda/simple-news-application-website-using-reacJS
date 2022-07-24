import React, { Component } from 'react'
import AddMovies from '../components/AddMovies'

export default class MovieList extends Component {

    state = {
        moviesList: [],
    };

    addMovie = (title, year) => {
        console.log(title, year);

        let oldMovieList = this.state.moviesList;

        oldMovieList.push({
            name: title,
            year: year
        });

        this.setState({
            moviesList: oldMovieList
        });

        console.log(this.state.moviesList);
    }

    render() {
        return (
            <div>
                <div>
                    <AddMovies addNewMovie={this.addMovie} />
                </div>

                <h3>movies list</h3>
                {this.state.moviesList.map((movie, index) => (
                    <div key={ index }>
                        <p>Movie name: { movie.name }</p>
                        <p>Movie year: { movie.year }</p>
                    </div>
                )) }
                <p></p>
            </div>
        )
    }
}
