import React, { Component } from 'react';
import {
  Section,
  Container,
  Title,
  Hero,
  HeroBody,
  Columns,
  Column,
  Subtitle,
  Footer,
  Content
} from 'bloomer';
import 'bulma/css/bulma.css';
import FellowFormContainer from './containers/FellowFormContainer';
import FellowPreviewContainer from './containers/FellowPreviewContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Hero isColor="light" isSize="small">
          <HeroBody>
            <Container hasTextAlign="centered">
              <Title isSize={1}>SW2.5 フェロー作成所</Title>
            </Container>
          </HeroBody>
        </Hero>
        <Section>
          <Container>
            <Columns isCentered>
              <Column>
                <Subtitle>フォーム</Subtitle>
                <FellowFormContainer />
              </Column>
              <Column>
                <Subtitle>プレビュー</Subtitle>
                <FellowPreviewContainer />
              </Column>
            </Columns>
          </Container>
        </Section>
        <Footer>
          <Container>
            <Content isSize="small">
              <p>Created by @miyado20th</p>
              <p>
                本アプリケーションは、「グループＳＮＥ」及び「株式会社ＫＡＤＯＫＡＷＡ」が権利を有する『ソード・ワールド2.0／2.5』の、二次創作です。
              </p>
              <p>(C)GroupSNE</p>
              <p>(C)KADOKAWA</p>
            </Content>
          </Container>
        </Footer>
      </div>
    );
  }
}

export default App;
