import React, { Component } from "react";
import Home from './pages/Home';
import Results from './pages/Results';

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: "default"
    };
  }

  goToResults() {

  }

  render() {
    switch (this.state.view) {
      case "results":
        return (
          <Results />
        )
      default:
        return (
          <Home />
        );
    }
  }
}

export default App;
