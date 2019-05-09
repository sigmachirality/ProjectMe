import React, { Component } from "react";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import logo from '../assets/logo.png'
import { Card, Container, Columns, Content, Image, Media, Navbar } from 'react-bulma-components';

class Result extends Component {

  render() {
    //TODO: Use noun project API to dynamically generate things
    let cards = this.props.cards.map((card) =>
      <Card>
        <Card.Content>
          <Media>
            <Media.Item renderAs="figure" position="left">
              <Image renderAs="p" size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
            </Media.Item>
            <Media.Item>
              <Content>
                <p>
                  <strong>{card.title}</strong> <small>{card.duration}</small>
                </p>
              </Content>
            </Media.Item>
          </Media>
        </Card.Content>
      </Card>
    );
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
        <Container breakpoint="fullhd">
          <Columns>
            <Columns.Column size={4}>
              {cards}
            </Columns.Column>
            <Columns.Column size={8}>

            </Columns.Column>
          </Columns>
        </Container>
      </div>
    );
  }
}

export default Result;
