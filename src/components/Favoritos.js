import React from "react";
import { useDispatch, useSelector } from "react-redux";

export function Favoritos() {
    const counter = useSelector(state => state.favMovies);
}