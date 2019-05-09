import React, { Component } from "react";
import Home from './pages/Home';
import Results from './pages/Results';
import Graph from './pages/Graph';

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: "home",
      cards: []
    };
    this.goToResults = this.goToResults.bind(this);
    this.goToHome = this.goToHome.bind(this);
    this.goToGraph = this.goToGraph.bind(this);
  }

  goToHome() {
    this.setState({ view: "home", cards: [] });
  }

  goToResults(cards) {
    this.setState({ view: "results", cards: cards });
  }

  goToGraph() {
    this.setState({ view: "graph", cards: [] });
  }

  render() {
    switch (this.state.view) {
      case "results":
        return (
          <Results
            cards={this.state.cards}
            onHome={this.goToHome}
          />
        );
      case "graph":
        return (
          <Graph
            onHome={this.goToHome}
          />
        );
      default:
        return (
          <Home
            onSearch={this.goToResults}
            onGraph={this.goToGraph}
            loadGraph={this.goToGraph}
          />
        );
    }
  }
}

export default App;
