import React from "react";
import { useDispatch, useSelector } from "react-redux";

export function listMovies() {
    const counter = useSelector(state => state.favMovies);
}