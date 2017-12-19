import React from 'react';
import { connect } from 'react-redux';

import { getMovies } from '../../actions';

import { Movies } from './Movies';

const MoviesContainer = () => {
  return <Movies />;
};

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: () => dispatch(getMovies())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
