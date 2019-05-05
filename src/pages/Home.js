import React, { Component } from "react";
import Select from 'react-select'
import { Button, Container, Content, Columns, Image } from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import '../assets/search.css'
import logo from '../assets/logo.png'

class App extends Component {

  render() {
    return (
      <div>
        <Container is-desktop>
          <Image
            title="Check me out on Github!"
            src={logo}
            className="logo"
          />
          <Columns>
            <Columns.Column size={2} />
            <Columns.Column size={3}>
              <Select
                styles={{
                  control: (provided, _) => ({
                    ...provided,
                    color: "#1D222C"
                  })
                }}
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
                style={{ color: '#1D222C' }}
                fullwidth
              >
                Project Me!
              </Button>
            </Columns.Column>
            <Columns.Column size={2} />
          </Columns>
          <Content style={{ textAlign: 'center', color: '#7C7C7C' }}>
            <p>
              Made with
              &nbsp;
              <FontAwesomeIcon style={{ color: '#F56F71' }} icon="heart"> </FontAwesomeIcon>
              &nbsp;
              by <a href="https://danxtao.com/">Daniel Tao</a> and <a href="https://github.com/osimon8">Owen Simon</a>
            </p>
          </Content>
        </Container>
      </div>
    );
  }
}

export default App;