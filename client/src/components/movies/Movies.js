import React, { Component } from 'react';

import Movie from './Movie';
class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }


  componentDidMount() {
    const movies = this.props.fetchMovies(); // from 
    this.setState({
      movies
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.movies.map((movie, i) => {
            return <Movie title={movie.title} key={i} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Movies;