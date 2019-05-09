import React, { Component } from "react";
import Select from 'react-select/lib/Async';
import Axios from 'axios';
import { Button, Container, Content, Columns, Image } from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faFileCode } from '@fortawesome/free-solid-svg-icons'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import '../assets/search.css'
import logo from '../assets/logo.png'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      from: "",
      to: "",
      options: []
    }
    this.loadOptions = this.loadOptions.bind(this);
    this.loadCards = this.loadOptions.bind(this);
    /*this.loadOptions((response) => this.setState({
      options: response.map((obj) => ({
        value: obj.id,
        label: obj.name
      }))
    }));*/
  }

  loadOptions(callback) {
    Axios.get('/search')
      .then((response) => {
        callback(response);
      });
  }

  loadCards() {
    Axios.get("/path?from=" + this.state.from + "&to=" + this.state.to)
      .then((response) => {
        this.props.onSearch(response);
      })
      .catch(() => {
        this.props.onSearch({});
      });
  }

  render() {
    return (
      <Container is-desktop>
        <Image
          src={logo}
          className="logo"
        />
        <Columns>
          <Columns.Column size={1} />
          <Columns.Column size={3}>
            <Select
              placeholder="From..."
              isClearable
              isSearchable
              isDisabled={this.state.options.length === 0}
              option={this.state.options}
            />
          </Columns.Column>
          <Columns.Column size={3}>
            <Select
              placeholder="To..."
              isClearable
              isSearchable
              isDisabled={this.state.options.length === 0}
              option={this.state.options}
            />
          </Columns.Column>
          <Columns.Column size={2}>
            <Button
              style={{ color: '#1D222C' }}
              fullwidth
              onClick={this.loadCards}
            >
              Project Me!
              </Button>
          </Columns.Column>
          <Columns.Column size={2}>
            <Button
              style={{ color: '#1D222C' }}
              fullwidth
              onClick={this.props.loadGraph}
            >
              Load Graph!
              </Button>
          </Columns.Column>
          <Columns.Column size={1} />
        </Columns>
        <Content style={{ textAlign: 'center', color: '#7C7C7C' }}>
          <p>
            Made with
            &nbsp;
              <FontAwesomeIcon style={{ color: '#F56F71' }} icon={faHeart}> </FontAwesomeIcon>
            &nbsp;
              by <a href="https://danxtao.com/">Daniel Tao</a> and <a href="https://github.com/osimon8">Owen Simon</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
              <a className="fa" href="https://github.com/sigmachirality/ProjectMe">
              <FontAwesomeIcon icon={faGithub} style={{ size: '3rem' }} />
            </a>
            &nbsp;&nbsp;
              <a className="fa" href="https://devpost.com/software/projectme-machine-learning-career-consultant">
              <FontAwesomeIcon icon={faFileCode} style={{ size: '3rem' }} />
            </a>
          </p>
        </Content>
      </Container>
    );
  }
}

export default Home;