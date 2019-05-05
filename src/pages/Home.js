import React, { Component } from "react";
import Select from 'react-select'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import '../assets/search.css'
import logo from '../assets/logo.png'

class App extends Component {

  render() {
    return (
      <div>
        <img
          src={logo}
          className="logo"
        />
        <br />
        <inline-block>
          <Select
            style={{ width: "50vw" }}
            isClearable
            isSearchable
          />
          <Select
            style={{ width: "50vw" }}
            isClearable
            isSearchable
          />
        </inline-block>
      </div>
    );
  }
}

export default App;