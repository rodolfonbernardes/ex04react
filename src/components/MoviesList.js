import React, {useState, useEffect} from "react";
import { MoviesService } from "../services/MoviesService";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import {
  setFavoritos
} from "../actions/addMovies";

export const MoviesList = () => {
  const [movies, setMovies] = useState({ data: { results: [] }});
  
  const dispatch = useDispatch();

    const requestMovies = async () => {
      const moviesResult = await MoviesService.getPopularMovies();
      setMovies(moviesResult);
    };

    useEffect(() => {
      requestMovies();
    }, []);
  
    return (
      <ul>
        {movies.data.results.map(movie => (
          <li><Link to={`movie/${movie.id}`}>{movie.title}</Link>  <button onClick={() => dispatch(setFavoritos(movie))}>Add</button></li>          
       ))}
      </ul>
    );
};
