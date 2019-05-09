import React, { Component } from "react";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import logo from '../assets/logo.png'
import { Navbar } from 'react-bulma-components';
import { Graph as GraphDisplay } from "react-d3-graph";

class Graph extends Component {

  constructor() {
    super();
    this.state = {
      data: {
        nodes: [{ id: 'Harry' }, { id: 'Sally' }, { id: 'Alice' }],
        links: [{ source: 'Harry', target: 'Sally' }, { source: 'Harry', target: 'Alice' }]
      },
      config: {
        directed: true,
        nodeHighlightBehavior: true,
        height: window.innerHeight,
        width: window.innerWidth,
        node: {
          color: 'white',
          fontColor: 'white',
          fontSize: 30,
          size: 400,
          highlightFontSize: 40,
          highlightFontWeight: "strong",
          highlightStrokeColor: 'yellow'
        }
      }
    };
  }

  render() {
    return (
      <div>
        <Navbar
          style={{
            height: "100px",
            backgroundColor: "#1D222C",
            borderBottom: "2px solid #7C7C7C"
          }}
        >
          <Navbar.Brand>
            <Navbar.Item onClick={this.props.onHome}>
              <img
                src={logo}
                alt="ProjectMe"
                style={{
                  width: "171px",
                  maxHeight: "100px"
                }}
              />
            </Navbar.Item>
          </Navbar.Brand>
        </Navbar>
        <GraphDisplay
          id="jobGraph"
          ref="graph"
          data={this.state.data}
          config={this.state.config}
        />
      </div>
    );
  }
}

export default Graph;
