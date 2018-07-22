import React, { Component } from 'react';
import { 
  Tile, Box, Tag, Field, Label, Control, Input, FieldLabel, FieldBody, TextArea, Select, Container, Button
} from 'bloomer';
import 'bulma/css/bulma.css';
import { FellowTemplate } from '../FellowTemplate.js'

export class FellowForm extends Component {
  constructor() {
    super();
    this.state = {
      level: 0,
      playerName: "",
      characterName: "",
      species: "",
      sex: "",
      age: "",
      skills: "",
      languages: "",
      selfIntroduction: "",
      manaPoint: 0,
      requireExps: false,
      requirePay: false,
      note: "",
      image: "",
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
            <Label><Tag isColor='white'> { rolled }</Tag></Label>
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
        <Container>
        <FellowTemplate 
            level={props => (
                <Field>
                    <Label><Tag isColor='white'>レベル</Tag></Label>
                    <Control><Input type='number' name='level' value={this.state.level} onChange={this.handleInputChange}/></Control>
                </Field>
            )}
            characterName={ () => (
                <Field isHorizontal>
                    <Label><Tag isColor='white'>名前</Tag></Label>
                    <FieldBody>
                        <Control style={ {width: '100%'} }><Input type='text' name='characterName' onChange={this.handleInputChange}/></Control>
                    </FieldBody>
                </Field>
            )}
            playerName={ () => (
                <Field isHorizontal>
                    <Label><Tag isColor='white'>プレイヤー名</Tag></Label>
                    <FieldBody>
                    <Control style={ {width: '100%'} }><Input type='text' name='playerName' onChange={this.handleInputChange}/></Control>
                    </FieldBody>
                </Field>
            )}
            species={ () => (
                <Field isHorizontal>
                    <Label><Tag isColor='white'>種族</Tag></Label>
                    <FieldBody>
                    <Control style={ {width: '100%'} }><Input type='text' name='species' onChange={this.handleInputChange}/></Control>
                    </FieldBody>
                </Field>                
            )}
            sex={ () => (
                <Field isHorizontal>
                    <Label><Tag isColor='white'>性別</Tag></Label>
                    <FieldBody>
                    <Control style={ {width: '100%'} }><Input type='text' name='sex' onChange={this.handleInputChange}/></Control>
                    </FieldBody>
                </Field>
            )}
            age={ () => (
                <Field isHorizontal>
                    <Label><Tag isColor='white'>年齢</Tag></Label>
                    <FieldBody>
                    <Control style={ {width: '100%'} }><Input type='text' name='age' onChange={this.handleInputChange}/></Control>
                    </FieldBody>
                </Field>
            )}
            skills={ () => (
                <Field>
                    <Label><Tag isColor='white'>技能</Tag></Label>
                    <Control><TextArea name='skills' onChange={this.handleInputChange}/></Control>
                </Field>
            )}
            languages={ () => (
                <Field>
                    <Label><Tag isColor='white'>言語</Tag></Label>
                    <Control><TextArea name='languages' onChange={this.handleInputChange}/></Control>
                </Field>   
            )}
            selfIntroduction={ () => (
                <Field>
                    <Label><Tag isColor='white'>自己紹介</Tag></Label>
                    <Control><TextArea name='selfIntroduction' onChange={this.handleInputChange}/></Control>
                </Field>                
            )}
            manaPoint={ () => (
                <Field isHorizontal>
                    <Label><Tag isColor='white'>MP</Tag></Label>
                    <FieldBody>
                    <Control><Input type='number' name='manaPoint' onChange={this.handleInputChange}/></Control>
                    </FieldBody>
                </Field>                
            )}
            requireExps={ () => (
                <Field isHorizontal>
                    <Label><Tag isColor='white'>経験点</Tag></Label>
                    <FieldBody>
                    <Control>
                    <Select name='requireExps' value={this.state.requireExps} onChange={this.handleInputChange}>
                    <option value={true}>必要</option>
                    <option value={false}>不要</option>                
                    </Select>
                    </Control>
                    </FieldBody>
                </Field>                
            )}
            requirePay={ () => (
                <Field isHorizontal>
                    <Label><Tag isColor='white'>報酬</Tag></Label>
                    <FieldBody>
                    <Control>
                    <Select name='requirePay' value={this.state.requirePay} onChange={this.handleInputChange}>
                    <option value="true">はい</option>
                    <option value="false">いいえ</option>                
                    </Select>
                    </Control>
                    </FieldBody>
                </Field>                
            )}
            actions = { () => actions}
            image = { () => (
                <Field>
                    <Label><Tag isColor='white'>似顔絵など</Tag></Label>
                    <Control><Input type='file' accept="image/*" name='image' onChange={this.handleInputChange}/></Control>
                </Field>                                
            )}
            note = { () => (
                <Field>
                    <Label><Tag isColor='white'>備考</Tag></Label>
                    <Control><TextArea name='note' onChange={this.handleInputChange}/></Control>
                </Field>                
            )}
        />
        <Button onClick={this.createFellow}>作成</Button>
        </Container>);
    }
}