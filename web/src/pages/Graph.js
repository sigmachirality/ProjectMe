import React, { Component } from "react";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import logo from '../assets/logo.png'
import { Navbar, Container } from 'react-bulma-components';
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
        height: window.innerHeight * .9,
        width: window.innerWidth * .9,
        d3: {
          gravity: -2000,
          linkLength: 1000
        },
        link: {
          color: '#7C7C7C',
          labelProperty: 'count',
          fontColor: 'white',
          fontSize: 15,
          renderLabel: true,
          semanticStrokeWidth: true
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
        <Container>
          <GraphDisplay
            id="jobGraph"
            ref="graph"
            data={this.state.data}
            config={this.state.config}
          />
        </Container>
      </div>
    );
  }
}

export default Graph;
