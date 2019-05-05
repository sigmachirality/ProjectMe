import React, { Component } from "react";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import logo from '../assets/logo.png'
import { Navbar, Container, Content } from 'react-bulma-components';
import Footer from '../components/Footer'

class App extends Component {

  render() {
    return (
      <div>
        <Navbar
          className="is-dark"
          style={{ height: "100px" }}
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
        <div style={{ minHeight: "100vh" }}></div>
        <Footer />
      </div>
    );
  }
}

export default App;
