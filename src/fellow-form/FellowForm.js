import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { 
  Tile, Box, Tag, Field, Label, Control, Input, FieldLabel, FieldBody, TextArea, Select, Container, Button, Content, Table
} from 'bloomer';
import 'bulma/css/bulma.css';
import { FellowTemplate } from '../FellowTemplate.js';
import domToImage from 'dom-to-image';

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
      requireReport: false,
      requireExps: false,
      requirePay: false,
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
        const actions = [];
        [7,8,9,10].forEach( rolled => {
            actions.push(<tr>
                <td>{rolled}</td>                
                <td>{this.state.actions[`rolled${rolled}`].action}</td>
                <td>{this.state.actions[`rolled${rolled}`].line}</td>
                <td>{this.state.actions[`rolled${rolled}`].total}</td>
                <td>{this.state.actions[`rolled${rolled}`].effect}</td>
            </tr>);
        });
        const fellow = (<FellowTemplate 
                level = { () => (
                    <Content>
                        { this.state.level }
                    </Content>                
                )}
                characterName={ () => (
                    <Content>
                        <Label><Tag isColor='white'>名前</Tag></Label>
                        { this.state.characterName }
                    </Content>
                )}
                playerName={ () => (
                    <Content >
                        <Label><Tag isColor='white'>プレイヤー名</Tag></Label>
                        { this.state.playerName }
                    </Content>
                )}
                species={ () => (
                    <Content >
                        <Label><Tag isColor='white'>種族</Tag></Label>
                        { this.state.species }
                    </Content>                
                )}
                sex={ () => (
                    <Content >
                        <Label><Tag isColor='white'>性別</Tag></Label>
                        { this.state.sex }
                    </Content>
                )}
                age={ () => (
                    <Content >
                        <Label><Tag isColor='white'>年齢</Tag></Label>
                        { this.state.age }
                    </Content>
                )}
                skills={ () => (
                    <Content>
                        <Label><Tag isColor='white'>技能</Tag></Label>
                        { this.state.skills }
                    </Content>
                )}
                languages={ () => (
                    <Content>
                        <Label><Tag isColor='white'>言語</Tag></Label>
                        { this.state.languages }
                    </Content>   
                )}
                selfIntroduction={ () => (
                    <Content>
                        <Label><Tag isColor='white'>自己紹介</Tag></Label>
                        { this.state.selfIntroduction }
                    </Content>                
                )}
                manaPoint={ () => (
                    <Content >
                        <Label><Tag isColor='white'>MP</Tag></Label>
                        { this.state.manaPoint }
                    </Content>                
                )}
                requireExps={ () => (
                    <Content>
                        <Label><Tag isColor='white'>経験点</Tag></Label>
                        { this.state.requireExps }
                    </Content>                
                )}
                requirePay={ () => (
                    <Content>
                        <Label><Tag isColor='white'>報酬</Tag></Label>
                        { this.state.requirePay }
                    </Content>                
                )}
                actions = { () => (<Table isFullWidth>
                    <thead>
                        <tr>
                            <td>想定出目</td><td>行動</td><td>台詞</td><td>達成値</td><td>効果</td>
                        </tr>
                    </thead>
                    <tbody>
                        {actions}
                    </tbody>
                    </Table>)}
                image = { () => (
                    <Content>
                        <Label><Tag isColor='white'>似顔絵など</Tag></Label>
                        画像
                    </Content>                             
                )}
            />);
        ReactDOM.render(fellow, document.getElementById('fellow'), () => {
            domToImage.toPng(document.getElementById('fellow'))
            .then( dataUrl => {
                var img = new Image();
                img.src = dataUrl;
                document.body.appendChild(img);
            });
        });
        console.log(this.state);
    }

    render() {
        var actions = [];
        [7,8,9,10].forEach((rolled) => {
        actions.push(<Field isHorizontal style={{marginBottom: "0"}}>
            <FieldBody>
            <Field>
                <Control>
                <Input type='text' name='action' style={{fontSize: "0.5rem"}}  placeholder="行動" onChange={ event => this.handleActionChange(`rolled${rolled}`, event)}/>
                </Control>
            </Field>
            <Field>
                <Control>
                <Input type='text' name='lines' style={{fontSize: "0.5rem"}} placeholder="台詞"  onChange={ event => this.handleActionChange(`rolled${rolled}`, event)}/>
                </Control>
            </Field>
            <Field style={{width: 40}}>
                <Control>
                <Input type='number' name='total' style={{fontSize: "0.5rem", width: 40}}  onChange={ event => this.handleActionChange(`rolled${rolled}`, event)}/>
                </Control>
            </Field>
            <Field>
                <Control>
                <Input type='text' name='effect' style={{fontSize: "0.5rem"}}  placeholder="効果"  onChange={ event => this.handleActionChange(`rolled${rolled}`, event)}/>
                </Control>
            </Field>
            </FieldBody>
        </Field>);
        });

        return (
        <Container>
        <FellowTemplate 
            level={ () => (
                <Input type='number' name='level' isSize="small" value={this.state.level} onChange={this.handleInputChange}/>
            )}
            characterName={ () => (
                <Input type='text' name='characterName' isSize="small" onChange={this.handleInputChange}/>
            )}
            playerName={ () => (
                <Input type='text' name='playerName' style={{fontSize: "0.5rem"}} onChange={this.handleInputChange}/>
            )}
            species={ () => (
                <Input type='text' name='species' style={{fontSize: "0.5rem"}} onChange={this.handleInputChange}/>
            )}
            sex={ () => (
                <Input type='text' name='sex' style={{fontSize: "0.5rem"}} onChange={this.handleInputChange} />
            )}
            age={ () => (
                <Input type='text' name='age' style={{fontSize: "0.5rem"}} onChange={this.handleInputChange} />
            )}
            skills={ () => (
                <TextArea name='skills' style={{fontSize: "0.5rem", resize: "none"}} rows={3} onChange={this.handleInputChange} />
            )}
            languages={ () => (
                <TextArea name='languages' style={{fontSize: "0.5rem", resize: "none"}} rows={3} onChange={this.handleInputChange}/>
            )}
            selfIntroduction={ () => (
                <TextArea name='selfIntroduction'  style={{fontSize: "0.5rem", resize: "none"}} rows={3} onChange={this.handleInputChange}/>
            )}
            manaPoint={ () => (
                <Input type='number' name='manaPoint' isSize="small" onChange={this.handleInputChange}/>
            )}
            requireReport={ () => (
                <Select name='requireReport' isSize="small" style={{fontSize: "0.5rem"}} value={this.state.requireReport} onChange={this.handleInputChange}>
                <option value={true}>必要</option>
                <option value={false}>不要</option>                
                </Select>
            )}
            requireExps={ () => (
                <Select name='requireExps' isSize="small" style={{fontSize: "0.5rem"}} value={this.state.requireExps} onChange={this.handleInputChange}>
                <option value={true}>必要</option>
                <option value={false}>不要</option>                
                </Select>
            )}
            requirePay={ () => (
                <Select name='requirePay' isSize="small" style={{fontSize: "0.5rem"}} value={this.state.requirePay} onChange={this.handleInputChange}>
                <option value="true">必要</option>
                <option value="false">不要</option>                
                </Select>
            )}
            actions = { () => actions}
            image = { () => (
                <Input type='file' accept="image/*" name='image'isSize="small" style={{fontSize: "0.5rem"}} onChange={this.handleInputChange}/>
            )}
        />
        <Button onClick={this.createFellow}>作成</Button>
        </Container>);
    }
}