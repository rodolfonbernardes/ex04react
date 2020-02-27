import React from 'react';
import { Route } from 'react-router-dom';
import { Movie } from './components/Movie';
import { MoviesList } from './components/MoviesList';

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={MoviesList} />    
    <Route path="/movie/:id" component={Movie} />
  </>
);