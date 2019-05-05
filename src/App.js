import React, { Component } from "react";
import Home from './pages/Home'

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: "default"
    };
  }

  render() {
    switch (this.state.view) {
      default:
        return (
          <Home />
        );
    }
  }
}

export default App;
