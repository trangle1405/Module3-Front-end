import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TrafficLight from "./components/TrafficLight"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TrafficLight />
      </div>
    );
  }
}
export default App;
