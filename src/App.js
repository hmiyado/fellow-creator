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
  onSubmit() {
    console.log("on submit");
  }

  render() {

    var actions = [];
    [7,8,9,10].forEach((outcome) => {
       actions.push(<Field isHorizontal>
        <FieldLabel isNormal>
          <Label> { outcome } </Label>
        </FieldLabel>
        <FieldBody>
          <Field>
            <Control>
            <Input type='text' placeholder="行動" />
            </Control>
          </Field>
          <Field>
            <Control>
            <Input type='text' placeholder="台詞" />
            </Control>
          </Field>
          <Field>
            <Control>
            <Input type='number' placeholder="達成値" />
            </Control>
          </Field>
          <Field>
            <Control>
            <Input type='text' placeholder="効果" />
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
            <Control><Input type='number' isSize='small' /></Control>
            </FieldBody>
          </Field>
          <Field isHorizontal>
            <FieldLabel><Label>名前</Label></FieldLabel>
            <FieldBody>
            <Control><Input type='text' /></Control>
            </FieldBody>
          </Field>
          <Field isHorizontal>
            <FieldLabel><Label>プレイヤー名</Label></FieldLabel>
            <FieldBody>
            <Control><Input type='text' /></Control>
            </FieldBody>
          </Field>
          <Field isHorizontal>
            <FieldLabel><Label>性別</Label></FieldLabel>
            <FieldBody>
            <Control><Input type='text' /></Control>
            </FieldBody>
          </Field>
          <Field isHorizontal>
            <FieldLabel><Label>年齢</Label></FieldLabel>
            <FieldBody>
            <Control><Input type='text' /></Control>
            </FieldBody>
          </Field>
          <Field isHorizontal>
            <FieldLabel><Label>技能</Label></FieldLabel>
            <FieldBody>
            <Control><TextArea /></Control>
            </FieldBody>
          </Field>
          <Field isHorizontal>
            <FieldLabel>            <Label>言語</Label></FieldLabel>
            <FieldBody>
            <Control><TextArea /></Control>
            </FieldBody>
          </Field>
          <Field isHorizontal>
            <FieldLabel>
            <Label>自己紹介</Label>
            </FieldLabel>
            <FieldBody>
            <Control><TextArea /></Control>
            </FieldBody>
          </Field>
          <Field isHorizontal>
            <FieldLabel>
            <Label>MP</Label>
            </FieldLabel>
            <FieldBody>
            <Control><Input type='number' /></Control>
            </FieldBody>
          </Field>
          <Field isHorizontal>
            <FieldLabel>
            <Label>経験点</Label>
            </FieldLabel>
            <FieldBody>
            <Control>
              <Select>
              <option value="true">はい</option>
              <option value="false">いいえ</option>                
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
              <Select>
              <option value="true">はい</option>
              <option value="false">いいえ</option>                
              </Select>
            </Control>
            </FieldBody>
          </Field>
          { actions }
          <Field>
            <Control><Button onClick={this.onSubmit}>作成</Button></Control>
          </Field>
      </Container>
      </Section>
    );
  }
}

export default App;
