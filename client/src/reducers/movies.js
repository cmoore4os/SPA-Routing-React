import { GET_MOVIES, ADD_MOVIE } from '../actions';

export default (movies = [], action) => {
  switch (action.type) {
    case GET_MOVIES:
      return action.payload.data;
    case ADD_MOVIE:
      const addMovie = movies.concat(action.payload);
      return addMovie;
    default:
      return movies;
  }
};
