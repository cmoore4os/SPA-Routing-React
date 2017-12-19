import axios from 'axios';
// these are exported to reducers
export const GET_MOVIES = "GET_MOVIES";
export const ADD_MOVIE = "ADD_MOVIE";

export const getMovies = () => {
  console.log("Loading the reel ...")
  const promise = axios.get('http:localhost:5000/movies');
  return {
    type: GET_MOVIES,
    payload:promise,
  }
}

export const addMovie = (movie) => {
  return {
    type: ADD_MOVIE,
    payload: movie,
  }
}