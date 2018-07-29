import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { 
  Tile, Box, Tag, Field, Label, Control, Input, FieldLabel, FieldBody, TextArea, Select, Container, Button, Content, Table
} from 'bloomer';
import 'bulma/css/bulma.css';
import FellowTemplate from './FellowTemplate';
import domToImage from 'dom-to-image';

const FellowForm = ({
    level, onLevelChange,
    playerName, onPlayerNameChange,
    characterName, onCharacterNameChange,
    species, onSpeciesChange,
    sex, onSexChange,
    age, onAgeChange,
    skills, onSkillsChange,
    languages, onLanguagesChange,
    selfIntroduction, onSelfIntroductionChange,
    manaPoint, onManaPointChange,
    requireReport, onRequireReportChange,
    requireExps, onRequireExpsChange,
    requirePay, onRequirePayChange
}) => {
    function createFellow() {
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

    var actions = [];
    [7,8,9,10].forEach((rolled) => {
    actions.push(<Field isHorizontal style={{marginBottom: "0.1rem"}}>
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
        <Field style={{width: 40, flexGrow: 0}}>
            <Control>
            <Input type='number' name='total' style={{fontSize: "0.5rem"}}  onChange={ event => this.handleActionChange(`rolled${rolled}`, event)}/>
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
            <Input 
            type='number' 
            isSize="small"
            value={level} 
            onChange={e => onLevelChange(e.target.value)}/>
        )}
        characterName={ () => (
            <Input 
            type='text'
            isSize="small" 
            onChange={e => onCharacterNameChange(e.target.value)}/>
        )}
        playerName={ () => (
            <Input 
            type='text' 
            style={{fontSize: "0.5rem"}} 
            onChange={e => onPlayerNameChange(e.target.value)}/>
        )}
        species={ () => (
            <Input 
            type='text' 
            style={{fontSize: "0.5rem"}} 
            onChange={e => onSpeciesChange(e.target.value)}/>
        )}
        sex={ () => (
            <Input 
            type='text'
            style={{fontSize: "0.5rem"}} 
            onChange={e => onSexChange(e.target.value)} />
        )}
        age={ () => (
            <Input 
            type='text' 
            style={{fontSize: "0.5rem"}} 
            onChange={e => onAgeChange(e.target.value)} />
        )}
        skills={ () => (
            <TextArea 
            style={{fontSize: "0.5rem", resize: "none"}} 
            rows={3} 
            onChange={e => onSkillsChange(e.target.value)} />
        )}
        languages={ () => (
            <TextArea 
            style={{fontSize: "0.5rem", resize: "none"}} 
            rows={3} 
            onChange={e => onLanguagesChange(e.target.value)}/>
        )}
        selfIntroduction={ () => (
            <TextArea 
            style={{fontSize: "0.5rem", resize: "none"}} 
            rows={3} 
            onChange={e => onSelfIntroductionChange(e.target.value)}/>
        )}
        manaPoint={ () => (
            <Input 
            type='number'  
            isSize="small" 
            onChange={e => onManaPointChange(e.target.value)}/>
        )}
        requireReport={ () => (
            <Select 
                isSize="small"
                style={{fontSize: "0.5rem"}} 
                value={requireReport}
                onChange={e => onRequireReportChange(e.target.value)}>
            <option value={true}>必要</option>
            <option value={false}>不要</option>                
            </Select>
        )}
        requireExps={ () => (
            <Select 
                isSize="small" 
                style={{fontSize: "0.5rem"}} 
                value={requireExps} 
                onChange={e => onRequireExpsChange(e.target.value)}>
            <option value={true}>必要</option>
            <option value={false}>不要</option>                
            </Select>
        )}
        requirePay={ () => (
            <Select 
                isSize="small" 
                style={{fontSize: "0.5rem"}} 
                value={requirePay} 
                onChange={e => onRequirePayChange(e.target.value)}>
            <option value={true}>必要</option>
            <option value={false}>不要</option>                
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

export default FellowForm