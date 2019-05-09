import React, { Component } from "react";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import logo from '../assets/logo.png'
import { Navbar } from 'react-bulma-components';
import { Graph as GraphDisplay } from "react-d3-graph";

class Graph extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.data);
    this.state = {
      data: this.props.data,
      config: {
        collapsible: true,
        directed: true,
        nodeHighlightBehavior: true,
        height: window.innerHeight * .75,
        width: window.innerWidth * .75,
        d3: {
          gravity: -1000,
          linkLength: 300
        },
        link: {
          labelProperty: 'connections'
        },
        node: {
          labelProperty: 'name',
          color: 'white',
          fontColor: 'white',
          fontSize: 15,
          size: 400,
          highlightFontSize: 18,
          highlightFontWeight: "strong",
          highlightStrokeColor: 'lightblue'
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
