import React, { Component } from "react";
import Home from './pages/Home';
import Results from './pages/Results';

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: "home",
      cards: []
    };
    this.goToResults = this.goToResults.bind(this);
    this.goToHome = this.goToHome.bind(this);
  }

  goToResults() {
    this.setState({ view: "results", cards: [] });
  }

  goToHome(cards) {
    this.setState({ view: "home", cards: cards });
  }

  render() {
    switch (this.state.view) {
      case "results":
        return (
          <Results
            cards={this.state.cards}
            onHome={this.goToHome}
          />
        )
      default:
        return (
          <Home
            onSearch={this.goToResults}
          />
        );
    }
  }
}

export default App;
