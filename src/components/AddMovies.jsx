import React, { Component } from 'react'

export default class AddMovies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            year: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNewMovie(this.state.title, this.state.year);
    }

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={ this.handleSubmit }>
                        <label htmlFor="movie">New Movie
                            <input type="text" name='title' onChange={this.handleChange} />
                        </label>

                        <label htmlFor="movie">New Year
                            <input type="text" name='year' onChange={this.handleChange} />
                        </label>

                        <input type="submit" value='submit'/>
                    </form>

                </div>
            </div>
        )
    }
}
