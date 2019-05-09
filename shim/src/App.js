import React, { Component } from "react";
import Home from './pages/Home';
import Results from './pages/Results';
import Graph from './pages/Graph';
import Axios from 'axios';

const graphData = { "nodes": [{ "id": 0, "name": "Health Care Worker or Physician" }, { "id": 1, "name": "Third party freight broker" }, { "id": 2, "name": "Safety/Security Consultant" }, { "id": 3, "name": "Educational Worker" }, { "id": 4, "name": "IT or HR Worker" }, { "id": 5, "name": "Language Education Worker" }, { "id": 6, "name": "Software Developer" }, { "id": 8, "name": "Customer Service or Human Resources Worker" }, { "id": 9, "name": "Firefighter" }, { "id": 10, "name": "Laboratory Worker" }, { "id": 14, "name": "Managerial or Administrative Worker" }, { "id": 15, "name": "Attorney" }, { "id": 16, "name": "Legal Worker or Consultant in Business" }, { "id": 17, "name": "Dispatcher harvest personnel to harvest organs, transportation, and logistics" }, { "id": 18, "name": "Writer or Media Worker" }, { "id": 19, "name": "Technology Consultant or Engineer" }, { "id": 20, "name": "Real Estate Worker" }, { "id": 21, "name": "Business Executive" }, { "id": 22, "name": "Financial Worker" }, { "id": 23, "name": "Risk Assessment or Quality Control Worker" }, { "id": 24, "name": "Credentialed Trainer - Epic Credentialed Trainer Beaker" }, { "id": 25, "name": "Safety and Wellness Administrator or Supervisor" }, { "id": 26, "name": "Human Resources Consultant" }, { "id": 28, "name": "Senior Consultant or Executive" }, { "id": 30, "name": "Barista and Certified Barista Trainer" }, { "id": 31, "name": "Medical Researcher or Health Care Administrator" }], "links": [{ "source": 0, "target": 0, "count": 14268 }, { "source": 0, "target": 3, "count": 264 }, { "source": 0, "target": 4, "count": 144 }, { "source": 0, "target": 6, "count": 148 }, { "source": 0, "target": 8, "count": 306 }, { "source": 0, "target": 10, "count": 1 }, { "source": 0, "target": 14, "count": 8 }, { "source": 0, "target": 16, "count": 129 }, { "source": 0, "target": 18, "count": 49 }, { "source": 0, "target": 19, "count": 77 }, { "source": 0, "target": 20, "count": 28 }, { "source": 0, "target": 21, "count": 300 }, { "source": 0, "target": 22, "count": 90 }, { "source": 0, "target": 25, "count": 9896 }, { "source": 0, "target": 28, "count": 42 }, { "source": 0, "target": 31, "count": 876 }, { "source": 1, "target": 25, "count": 1 }, { "source": 2, "target": 21, "count": 1 }, { "source": 3, "target": 0, "count": 274 }, { "source": 3, "target": 3, "count": 652 }, { "source": 3, "target": 4, "count": 71 }, { "source": 3, "target": 6, "count": 104 }, { "source": 3, "target": 8, "count": 53 }, { "source": 3, "target": 14, "count": 1 }, { "source": 3, "target": 16, "count": 79 }, { "source": 3, "target": 18, "count": 202 }, { "source": 3, "target": 19, "count": 295 }, { "source": 3, "target": 20, "count": 6 }, { "source": 3, "target": 21, "count": 225 }, { "source": 3, "target": 22, "count": 69 }, { "source": 3, "target": 25, "count": 2606 }, { "source": 3, "target": 28, "count": 23 }, { "source": 3, "target": 31, "count": 32 }, { "source": 4, "target": 0, "count": 123 }, { "source": 4, "target": 3, "count": 63 }, { "source": 4, "target": 4, "count": 1132 }, { "source": 4, "target": 6, "count": 466 }, { "source": 4, "target": 8, "count": 162 }, { "source": 4, "target": 10, "count": 1 }, { "source": 4, "target": 14, "count": 2 }, { "source": 4, "target": 16, "count": 56 }, { "source": 4, "target": 18, "count": 43 }, { "source": 4, "target": 19, "count": 865 }, { "source": 4, "target": 20, "count": 10 }, { "source": 4, "target": 21, "count": 333 }, { "source": 4, "target": 22, "count": 38 }, { "source": 4, "target": 25, "count": 2632 }, { "source": 4, "target": 28, "count": 37 }, { "source": 4, "target": 31, "count": 4 }, { "source": 5, "target": 25, "count": 10 }, { "source": 6, "target": 0, "count": 158 }, { "source": 6, "target": 3, "count": 137 }, { "source": 6, "target": 4, "count": 496 }, { "source": 6, "target": 6, "count": 2914 }, { "source": 6, "target": 8, "count": 131 }, { "source": 6, "target": 14, "count": 8 }, { "source": 6, "target": 16, "count": 113 }, { "source": 6, "target": 18, "count": 125 }, { "source": 6, "target": 19, "count": 2107 }, { "source": 6, "target": 20, "count": 28 }, { "source": 6, "target": 21, "count": 611 }, { "source": 6, "target": 22, "count": 47 }, { "source": 6, "target": 23, "count": 1 }, { "source": 6, "target": 25, "count": 4513 }, { "source": 6, "target": 28, "count": 168 }, { "source": 6, "target": 31, "count": 10 }, { "source": 8, "target": 0, "count": 278 }, { "source": 8, "target": 3, "count": 32 }, { "source": 8, "target": 4, "count": 110 }, { "source": 8, "target": 6, "count": 128 }, { "source": 8, "target": 8, "count": 769 }, { "source": 8, "target": 14, "count": 2 }, { "source": 8, "target": 16, "count": 112 }, { "source": 8, "target": 18, "count": 54 }, { "source": 8, "target": 19, "count": 163 }, { "source": 8, "target": 20, "count": 36 }, { "source": 8, "target": 21, "count": 375 }, { "source": 8, "target": 22, "count": 52 }, { "source": 8, "target": 25, "count": 3571 }, { "source": 8, "target": 28, "count": 15 }, { "source": 8, "target": 31, "count": 7 }, { "source": 9, "target": 3, "count": 1 }, { "source": 9, "target": 25, "count": 1 }, { "source": 10, "target": 0, "count": 1 }, { "source": 10, "target": 25, "count": 4 }, { "source": 14, "target": 0, "count": 6 }, { "source": 14, "target": 3, "count": 3 }, { "source": 14, "target": 4, "count": 2 }, { "source": 14, "target": 6, "count": 7 }, { "source": 14, "target": 8, "count": 4 }, { "source": 14, "target": 14, "count": 8 }, { "source": 14, "target": 16, "count": 2 }, { "source": 14, "target": 19, "count": 3 }, { "source": 14, "target": 20, "count": 2 }, { "source": 14, "target": 21, "count": 12 }, { "source": 14, "target": 22, "count": 2 }, { "source": 14, "target": 25, "count": 128 }, { "source": 14, "target": 28, "count": 23 }, { "source": 15, "target": 3, "count": 2 }, { "source": 15, "target": 6, "count": 8 }, { "source": 15, "target": 16, "count": 3 }, { "source": 15, "target": 21, "count": 1 }, { "source": 15, "target": 25, "count": 2 }, { "source": 16, "target": 0, "count": 175 }, { "source": 16, "target": 3, "count": 89 }, { "source": 16, "target": 4, "count": 43 }, { "source": 16, "target": 6, "count": 88 }, { "source": 16, "target": 8, "count": 113 }, { "source": 16, "target": 14, "count": 2 }, { "source": 16, "target": 16, "count": 1655 }, { "source": 16, "target": 18, "count": 63 }, { "source": 16, "target": 19, "count": 30 }, { "source": 16, "target": 20, "count": 20 }, { "source": 16, "target": 21, "count": 222 }, { "source": 16, "target": 22, "count": 115 }, { "source": 16, "target": 25, "count": 3319 }, { "source": 16, "target": 28, "count": 24 }, { "source": 16, "target": 30, "count": 1 }, { "source": 16, "target": 31, "count": 10 }, { "source": 17, "target": 25, "count": 1 }, { "source": 18, "target": 0, "count": 47 }, { "source": 18, "target": 3, "count": 173 }, { "source": 18, "target": 4, "count": 55 }, { "source": 18, "target": 6, "count": 125 }, { "source": 18, "target": 8, "count": 63 }, { "source": 18, "target": 14, "count": 1 }, { "source": 18, "target": 16, "count": 66 }, { "source": 18, "target": 18, "count": 3506 }, { "source": 18, "target": 19, "count": 177 }, { "source": 18, "target": 20, "count": 19 }, { "source": 18, "target": 21, "count": 708 }, { "source": 18, "target": 22, "count": 83 }, { "source": 18, "target": 23, "count": 3 }, { "source": 18, "target": 25, "count": 5105 }, { "source": 18, "target": 28, "count": 42 }, { "source": 18, "target": 31, "count": 1 }, { "source": 19, "target": 0, "count": 73 }, { "source": 19, "target": 3, "count": 305 }, { "source": 19, "target": 4, "count": 1022 }, { "source": 19, "target": 6, "count": 2290 }, { "source": 19, "target": 8, "count": 180 }, { "source": 19, "target": 10, "count": 1 }, { "source": 19, "target": 14, "count": 5 }, { "source": 19, "target": 16, "count": 33 }, { "source": 19, "target": 18, "count": 137 }, { "source": 19, "target": 19, "count": 14936 }, { "source": 19, "target": 20, "count": 27 }, { "source": 19, "target": 21, "count": 891 }, { "source": 19, "target": 22, "count": 55 }, { "source": 19, "target": 25, "count": 8568 }, { "source": 19, "target": 28, "count": 233 }, { "source": 19, "target": 31, "count": 4 }, { "source": 20, "target": 0, "count": 20 }, { "source": 20, "target": 2, "count": 1 }, { "source": 20, "target": 3, "count": 10 }, { "source": 20, "target": 4, "count": 10 }, { "source": 20, "target": 6, "count": 25 }, { "source": 20, "target": 8, "count": 43 }, { "source": 20, "target": 14, "count": 1 }, { "source": 20, "target": 16, "count": 29 }, { "source": 20, "target": 18, "count": 13 }, { "source": 20, "target": 19, "count": 21 }, { "source": 20, "target": 20, "count": 69 }, { "source": 20, "target": 21, "count": 98 }, { "source": 20, "target": 22, "count": 19 }, { "source": 20, "target": 25, "count": 537 }, { "source": 20, "target": 28, "count": 5 }, { "source": 20, "target": 31, "count": 3 }, { "source": 21, "target": 0, "count": 299 }, { "source": 21, "target": 3, "count": 227 }, { "source": 21, "target": 4, "count": 322 }, { "source": 21, "target": 6, "count": 589 }, { "source": 21, "target": 8, "count": 359 }, { "source": 21, "target": 14, "count": 10 }, { "source": 21, "target": 15, "count": 8 }, { "source": 21, "target": 16, "count": 237 }, { "source": 21, "target": 18, "count": 660 }, { "source": 21, "target": 19, "count": 966 }, { "source": 21, "target": 20, "count": 94 }, { "source": 21, "target": 21, "count": 5564 }, { "source": 21, "target": 22, "count": 393 }, { "source": 21, "target": 23, "count": 2 }, { "source": 21, "target": 25, "count": 11308 }, { "source": 21, "target": 28, "count": 142 }, { "source": 21, "target": 31, "count": 19 }, { "source": 22, "target": 0, "count": 81 }, { "source": 22, "target": 3, "count": 53 }, { "source": 22, "target": 4, "count": 19 }, { "source": 22, "target": 5, "count": 2 }, { "source": 22, "target": 6, "count": 38 }, { "source": 22, "target": 8, "count": 62 }, { "source": 22, "target": 14, "count": 1 }, { "source": 22, "target": 16, "count": 99 }, { "source": 22, "target": 18, "count": 137 }, { "source": 22, "target": 19, "count": 43 }, { "source": 22, "target": 20, "count": 16 }, { "source": 22, "target": 21, "count": 366 }, { "source": 22, "target": 22, "count": 801 }, { "source": 22, "target": 25, "count": 2192 }, { "source": 22, "target": 28, "count": 28 }, { "source": 23, "target": 4, "count": 2 }, { "source": 23, "target": 21, "count": 2 }, { "source": 23, "target": 25, "count": 6 }, { "source": 24, "target": 25, "count": 1 }, { "source": 25, "target": 0, "count": 9836 }, { "source": 25, "target": 1, "count": 1 }, { "source": 25, "target": 3, "count": 2643 }, { "source": 25, "target": 4, "count": 2484 }, { "source": 25, "target": 5, "count": 8 }, { "source": 25, "target": 6, "count": 4477 }, { "source": 25, "target": 8, "count": 3425 }, { "source": 25, "target": 9, "count": 2 }, { "source": 25, "target": 10, "count": 2 }, { "source": 25, "target": 14, "count": 132 }, { "source": 25, "target": 15, "count": 8 }, { "source": 25, "target": 16, "count": 3338 }, { "source": 25, "target": 18, "count": 5148 }, { "source": 25, "target": 19, "count": 8849 }, { "source": 25, "target": 20, "count": 539 }, { "source": 25, "target": 21, "count": 11310 }, { "source": 25, "target": 22, "count": 2162 }, { "source": 25, "target": 23, "count": 4 }, { "source": 25, "target": 24, "count": 1 }, { "source": 25, "target": 25, "count": 116519 }, { "source": 25, "target": 26, "count": 9 }, { "source": 25, "target": 28, "count": 1269 }, { "source": 25, "target": 31, "count": 622 }, { "source": 26, "target": 4, "count": 2 }, { "source": 26, "target": 19, "count": 4 }, { "source": 26, "target": 25, "count": 3 }, { "source": 28, "target": 0, "count": 67 }, { "source": 28, "target": 3, "count": 11 }, { "source": 28, "target": 4, "count": 48 }, { "source": 28, "target": 6, "count": 150 }, { "source": 28, "target": 8, "count": 22 }, { "source": 28, "target": 14, "count": 21 }, { "source": 28, "target": 16, "count": 15 }, { "source": 28, "target": 18, "count": 37 }, { "source": 28, "target": 19, "count": 220 }, { "source": 28, "target": 20, "count": 8 }, { "source": 28, "target": 21, "count": 149 }, { "source": 28, "target": 22, "count": 7 }, { "source": 28, "target": 25, "count": 1296 }, { "source": 28, "target": 28, "count": 428 }, { "source": 30, "target": 25, "count": 1 }, { "source": 31, "target": 0, "count": 920 }, { "source": 31, "target": 3, "count": 27 }, { "source": 31, "target": 4, "count": 5 }, { "source": 31, "target": 6, "count": 10 }, { "source": 31, "target": 8, "count": 12 }, { "source": 31, "target": 16, "count": 2 }, { "source": 31, "target": 17, "count": 1 }, { "source": 31, "target": 19, "count": 4 }, { "source": 31, "target": 20, "count": 2 }, { "source": 31, "target": 21, "count": 31 }, { "source": 31, "target": 22, "count": 5 }, { "source": 31, "target": 25, "count": 569 }, { "source": 31, "target": 31, "count": 336 }] }

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: "home",
      cards: [],
      graph: graphData
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
    this.setState({ view: "graph", cards: []});
  }

  /*
  goToGraph() {
    Axios.get('http://127.0.0.1:8000/graph')
      .then((response) => {
        let edges = response.data.edges;
        let nodes = response.data.nodes;
        edges = edges.map((edge) => ({
          source: edge.fields.start,
          target: edge.fields.end,
          count: edge.fields.count
        }));
        nodes = nodes.filter((node) => node.fields.name !== "EMPTY").map((node) => ({
          id: node.pk,
          name: node.fields.name
        }));
        console.log(nodes, edges);
        this.setState({ view: "graph", cards: [], graph: { nodes: nodes, links: edges } });
      });
  }
  */

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
