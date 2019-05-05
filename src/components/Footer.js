import React, { Component } from "react";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Footer as BulmaFooter, Container, Content } from 'react-bulma-components';

class Footer extends Component {
  render() {
    return (
      <BulmaFooter>
        <Container>
          <Content style={{ textAlign: 'center' }}>
            <p>
              <strong>ProjectMe</strong> was built by <a href="https://danxtao.com/">Daniel Tao</a> and <a href="https://github.com/osimon8">Owen Simon</a>.
              </p>
          </Content>
        </Container>
      </BulmaFooter>
    );
  }
}

export default Footer;
