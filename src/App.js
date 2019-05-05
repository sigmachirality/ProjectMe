import React, { Component } from "react";
import Home from './pages/Home'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart);

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
