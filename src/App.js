import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  Field,
  Label,
  Control,
  Input,
  TextArea, 
  Select, 
  Table, 
  FieldLabel, 
  FieldBody, 
  Columns, 
  Column, 
  Section, 
  Container,
  Title,
  Button
} from 'bloomer';
import 'bulma/css/bulma.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      level: 0,
      playerName: "Player",
      characterName: "Character",
      species: "Human",
      sex: "Man",
      age: "18",
      skills: "Fighter 1",
      languages: "Common",
      selfIntroduction: "Nice to meet you!",
      manaPoint: 0,
      requireExps: false,
      requirePay: false,
      actions: {
        rolled7: {
          action: "",
          lines: "",
          total: 0,
          effect: ""
        },
        rolled8: {
          action: "",
          lines: "",
          total: 0,
          effect: ""
        },
        rolled9: {
          action: "",
          lines: "",
          total: 0,
          effect: ""
        },
        rolled10: {
          action: "",
          lines: "",
          total: 0,
          effect: ""
        }
      }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleActionChange = this.handleActionChange.bind(this);
    this.createFellow = this.createFellow.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    });
  }

  handleActionChange(rolled, event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      actions: {
        ...this.state.actions,
        [rolled]: {
          ...this.state.actions[rolled],
          [name]: target.value
        }
      }
    });
  }

  createFellow() {
    console.log(this.state);
  }

  render() {
    var actions = [];
    [7,8,9,10].forEach((rolled) => {
       actions.push(<Field isHorizontal>
        <FieldLabel isNormal>
          <Label> { rolled } </Label>
        </FieldLabel>
        <FieldBody>
          <Field>
            <Control>
            <Input type='text' name='action' placeholder="行動" onChange={ event => this.handleActionChange(`rolled${rolled}`, event)}/>
            </Control>
          </Field>
          <Field>
            <Control>
            <Input type='text' name='lines' placeholder="台詞"  onChange={ event => this.handleActionChange(`rolled${rolled}`, event)}/>
            </Control>
          </Field>
          <Field>
            <Control>
            <Input type='number' name='total' placeholder="達成値"  onChange={ event => this.handleActionChange(`rolled${rolled}`, event)}/>
            </Control>
          </Field>
          <Field>
            <Control>
            <Input type='text' name='effect' placeholder="効果"  onChange={ event => this.handleActionChange(`rolled${rolled}`, event)}/>
            </Control>
          </Field>
        </FieldBody>
      </Field>);
    });

    return (
      <Section>
        <Container>
        <Title isSize={1}>SW2.5 フェロー作成フォーム</Title>
          <Field isHorizontal>
            <FieldLabel><Label>レベル</Label></FieldLabel>
            <FieldBody>
            <Control><Input type='number' name='level' value={this.state.level} onChange={this.handleInputChange}/></Control>
            </FieldBody>
          </Field>
          <Field isHorizontal>
            <FieldLabel><Label>名前</Label></FieldLabel>
            <FieldBody>
            <Control><Input type='text' name='characterName' onChange={this.handleInputChange}/></Control>
            </FieldBody>
          </Field>
          <Field isHorizontal>
            <FieldLabel><Label>プレイヤー名</Label></FieldLabel>
            <FieldBody>
            <Control><Input type='text' name='playerName' onChange={this.handleInputChange}/></Control>
            </FieldBody>
          </Field>
          <Field isHorizontal>
            <FieldLabel><Label>性別</Label></FieldLabel>
            <FieldBody>
            <Control><Input type='text' name='sex' onChange={this.handleInputChange}/></Control>
            </FieldBody>
          </Field>
          <Field isHorizontal>
            <FieldLabel><Label>年齢</Label></FieldLabel>
            <FieldBody>
            <Control><Input type='text' name='age' onChange={this.handleInputChange}/></Control>
            </FieldBody>
          </Field>
          <Field isHorizontal>
            <FieldLabel><Label>技能</Label></FieldLabel>
            <FieldBody>
            <Control><TextArea name='skills' onChange={this.handleInputChange}/></Control>
            </FieldBody>
          </Field>
          <Field isHorizontal>
            <FieldLabel><Label>言語</Label></FieldLabel>
            <FieldBody>
            <Control><TextArea name='languages' onChange={this.handleInputChange}/></Control>
            </FieldBody>
          </Field>
          <Field isHorizontal>
            <FieldLabel>
            <Label>自己紹介</Label>
            </FieldLabel>
            <FieldBody>
            <Control><TextArea name='selfIntroduction' onChange={this.handleInputChange}/></Control>
            </FieldBody>
          </Field>
          <Field isHorizontal>
            <FieldLabel>
            <Label>MP</Label>
            </FieldLabel>
            <FieldBody>
            <Control><Input type='number' name='manaPoint' onChange={this.handleInputChange}/></Control>
            </FieldBody>
          </Field>
          <Field isHorizontal>
            <FieldLabel>
            <Label>経験点</Label>
            </FieldLabel>
            <FieldBody>
            <Control>
              <Select name='requireExps' value={this.state.requireExps} onChange={this.handleInputChange}>
              <option value={true}>必要</option>
              <option value={false}>不要</option>                
              </Select>
            </Control>
            </FieldBody>
          </Field>
          <Field isHorizontal>
            <FieldLabel>
            <Label>報酬</Label>
            </FieldLabel>
            <FieldBody>
            <Control>
              <Select name='requirePay' value={this.state.requirePay} onChange={this.handleInputChange}>
              <option value="true">はい</option>
              <option value="false">いいえ</option>                
              </Select>
            </Control>
            </FieldBody>
          </Field>
          { actions }
          <Field>
            <Control><Button onClick={this.createFellow}>作成</Button></Control>
          </Field>
      </Container>
      </Section>
    );
  }
}

export default App;
