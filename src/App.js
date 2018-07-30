import React, { Component } from 'react';
import { Section, Container, Title } from 'bloomer';
import 'bulma/css/bulma.css';
import FellowFormContainer from './containers/FellowFormContainer';
import FellowPreviewContainer from './containers/FellowPreviewContainer';

class App extends Component {
  render() {
    return (
      <Section>
        <Container>
          <Title isSize={1}>SW2.5 フェロー作成フォーム</Title>
          <FellowFormContainer />
          <FellowPreviewContainer />
        </Container>
      </Section>
    );
  }
}

export default App;
