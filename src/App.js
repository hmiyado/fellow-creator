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

class App extends Component {
  render() {
    return (
      <Section>
        <Container>
          <Title isSize={1}>SW2.5 フェロー作成フォーム</Title>
          <FellowForm />
          <Button onClick={this.createFellow}>作成</Button>
        </Container>
      </Section>
    );
  }
}

export default App;
