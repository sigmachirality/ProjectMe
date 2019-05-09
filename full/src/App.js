import React, { Component } from "react";
import Home from './pages/Home';
import Results from './pages/Results';
import Graph from './pages/Graph';
import Axios from 'axios';

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
    Axios.get("http://127.0.0.1:8000/graph")
      .then((response) => {
        let edges = response.data.edges;
        let nodes = response.data.nodes;
        edges = edges.map((edge) => ({
          source: edge.fields.start,
          target: edge.fields.end,
          connections: 1 / edge.fields.connections
        }));
        nodes = nodes.filter((node) => node.fields.name !== "EMPTY").map((node) => ({
          id: node.pk,
          name: node.fields.name
        }));
        console.log(nodes, edges);
        this.setState({ view: "graph", cards: [], graph: { nodes: nodes, links: edges } });
      });
  }

  render() {
    console.log(this.state.graph)
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
            data={this.state.graph}
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
