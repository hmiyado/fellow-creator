import React, { Component } from 'react';
import { 
  Section, 
  Container,
  Title,
  Button
} from 'bloomer';
import 'bulma/css/bulma.css';
import { FellowTemplate } from './FellowTemplate.js';
import { FellowForm } from './fellow-form/FellowForm.js';
import { FellowResult } from './FellowResult.js';

class App extends Component {
  render() {
    return (
      <Section>
        <Container>
          <Title isSize={1}>SW2.5 フェロー作成フォーム</Title>
          <FellowForm />
          <FellowResult />
        </Container>
      </Section>
    );
  }
}

export default App;
