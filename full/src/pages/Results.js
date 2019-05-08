import React, { Component } from "react";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import logo from '../assets/logo.png'
import { Card, Container, Columns, Content, Image, Media } from 'react-bulma-components';

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
