import React from "react";
import "./styles.css";
import { ApplicationRoutes } from "./ApplicationRoutes";
import {Link} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <ul>
        <li>
          <Link to="/">home</Link>
      </li>
      <li>
          <Link to="/favoritos">favoritos</Link>
      </li>
      </ul>
      <ApplicationRoutes />
    </div>
  );
}
