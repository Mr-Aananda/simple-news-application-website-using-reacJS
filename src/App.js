import React, { Component } from "react";
import Navbar from "./components/Navbar";
import NavRoutes from "./components/NavRoutes";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar title={"NewsMonkey"} />
        <NavRoutes />
      </div>
    );
  }
}
