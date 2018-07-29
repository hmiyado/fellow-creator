import React, { Component } from 'react';
import { 
  Section, 
  Container,
  Title,
  Button
} from 'bloomer';
import 'bulma/css/bulma.css';
import FellowFormContainer from './containers/FellowFormContainer';
import { FellowResult } from './components/FellowResult';

class App extends Component {
  render() {
    return (
      <Section>
        <Container>
          <Title isSize={1}>SW2.5 フェロー作成フォーム</Title>
          <FellowFormContainer />
          <FellowResult />
        </Container>
      </Section>
    );
  }
}

export default App;
