import React, { Component } from "react";
import "./App.css";
import Quote from "./components/quote";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Quote />
      </div>
    );
  }
}

export default App;
