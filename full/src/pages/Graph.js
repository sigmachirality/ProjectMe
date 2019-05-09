import React, { Component } from "react";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import logo from '../assets/logo.png'
import { Container, Columns, Navbar } from 'react-bulma-components';
import { Graph as GraphDisplay } from "react-d3-graph";

class Graph extends Component {

  constructor() {
    super();
    this.state = {
      data: {
        nodes: [{ id: 'Harry' }, { id: 'Sally' }, { id: 'Alice' }],
        links: [{ source: 'Harry', target: 'Sally' }, { source: 'Harry', target: 'Alice' }]
      }
    };
  }

  render() {
    //TODO: Use noun project API to dynamically generate things
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
            <Navbar.Item>
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
        <Container breakpoint="fullhd">
          <GraphDisplay
            id="jobGraph"
            data={this.state.data}
          />
        </Container>
      </div>
    );
  }
}

export default Graph;
