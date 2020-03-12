import React from "react";
import {useSelector} from "react-redux";

export const Favoritos = () => {
    const movies = useSelector(state => state.movies.favMovies);
    return (
    <div>
     
     {movies.map(movie => (
        <li>{movie.title}</li>
      ))}
    
        <br/>

    </div>
  );
};