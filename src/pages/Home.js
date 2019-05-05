import React, { Component } from "react";
import Select from 'react-select'
import { Button, Container, Columns, Image } from 'react-bulma-components';
import Footer from '../components/Footer'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import '../assets/search.css'
import logo from '../assets/logo.png'

class App extends Component {

  render() {
    return (
      <div>
        <Container is-desktop>
          <Image
            src={logo}
            className="logo"
          />
          <Columns>
            <Columns.Column size={2} />
            <Columns.Column size={3}>
              <Select
                placeholder="From..."
                isClearable
                isSearchable
              />
            </Columns.Column>
            <Columns.Column size={3}>
              <Select
                placeholder="To..."
                isClearable
                isSearchable
              />
            </Columns.Column>
            <Columns.Column size={2}>
              <Button
                fullwidth
              >
                Project Me!
              </Button>
            </Columns.Column>
            <Columns.Column size={2} />
          </Columns>
        </Container>
      </div>
    );
  }
}

export default App;