import {
  SET_FAV
} from "../actions/addMovies";

const initialState = {
  favMovies: [{}]
};

export const movies = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAV:
      return {
        ...state,
        favMovies: state.favMovies.concat(action.payload)
      };
    default:
      return state;
  }
};
