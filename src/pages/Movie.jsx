import React, { Component } from 'react'
import MovieList from '../components/MovieList'


export default class movie extends Component {
    render() {
        return (
            <div>
                <h2>Movie list in below</h2>
                <MovieList/>
            </div>
        )
    }
}
