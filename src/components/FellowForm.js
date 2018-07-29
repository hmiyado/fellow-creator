import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Tile,
  Box,
  Tag,
  Field,
  Label,
  Control,
  Input,
  FieldLabel,
  FieldBody,
  TextArea,
  Select,
  Container,
  Button,
  Content,
  Table
} from 'bloomer';
import 'bulma/css/bulma.css';
import FellowTemplate from './FellowTemplate';
import domToImage from 'dom-to-image';

export default class FellowForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var actions = [];
    [7, 8, 9, 10].forEach(rolled => {
      actions.push(
        <Field isHorizontal style={{ marginBottom: '0.1rem' }}>
          <FieldBody>
            <Field>
              <Control>
                <Input
                  type="text"
                  style={{ fontSize: '0.5rem' }}
                  onChange={e =>
                    this.props.onFellowActionChange(rolled, e.target.value)
                  }
                />
              </Control>
            </Field>
            <Field>
              <Control>
                <Input
                  type="text"
                  style={{ fontSize: '0.5rem' }}
                  onChange={e =>
                    this.props.onLineChange(rolled, e.target.value)
                  }
                />
              </Control>
            </Field>
            <Field style={{ width: 40, flexGrow: 0 }}>
              <Control>
                <Input
                  type="number"
                  style={{ fontSize: '0.5rem' }}
                  onChange={e =>
                    this.props.onTotalChange(rolled, e.target.value)
                  }
                />
              </Control>
            </Field>
            <Field>
              <Control>
                <Input
                  type="text"
                  style={{ fontSize: '0.5rem' }}
                  onChange={e =>
                    this.props.onEffectChange(rolled, e.target.value)
                  }
                />
              </Control>
            </Field>
          </FieldBody>
        </Field>
      );
    });

    return (
      <Container>
        <FellowTemplate
          level={() => (
            <Input
              type="number"
              isSize="small"
              value={this.props.level}
              onChange={e => this.props.onLevelChange(e.target.value)}
            />
          )}
          characterName={() => (
            <Input
              type="text"
              isSize="small"
              onChange={e => this.props.onCharacterNameChange(e.target.value)}
            />
          )}
          playerName={() => (
            <Input
              type="text"
              style={{ fontSize: '0.5rem' }}
              onChange={e => this.props.onPlayerNameChange(e.target.value)}
            />
          )}
          species={() => (
            <Input
              type="text"
              style={{ fontSize: '0.5rem' }}
              onChange={e => this.props.onSpeciesChange(e.target.value)}
            />
          )}
          sex={() => (
            <Input
              type="text"
              style={{ fontSize: '0.5rem' }}
              onChange={e => this.props.onSexChange(e.target.value)}
            />
          )}
          age={() => (
            <Input
              type="text"
              style={{ fontSize: '0.5rem' }}
              onChange={e => this.props.onAgeChange(e.target.value)}
            />
          )}
          skills={() => (
            <TextArea
              style={{ fontSize: '0.5rem', resize: 'none' }}
              rows={3}
              onChange={e => this.props.onSkillsChange(e.target.value)}
            />
          )}
          languages={() => (
            <TextArea
              style={{ fontSize: '0.5rem', resize: 'none' }}
              rows={3}
              onChange={e => this.props.onLanguagesChange(e.target.value)}
            />
          )}
          selfIntroduction={() => (
            <TextArea
              style={{ fontSize: '0.5rem', resize: 'none' }}
              rows={3}
              onChange={e =>
                this.props.onSelfIntroductionChange(e.target.value)
              }
            />
          )}
          manaPoint={() => (
            <Input
              type="number"
              isSize="small"
              onChange={e => this.props.onManaPointChange(e.target.value)}
            />
          )}
          requireReport={() => (
            <Select
              isSize="small"
              style={{ fontSize: '0.5rem' }}
              value={this.props.requireReport}
              onChange={e => this.props.onRequireReportChange(e.target.value)}>
              <option value={true}>必要</option>
              <option value={false}>不要</option>
            </Select>
          )}
          requireExps={() => (
            <Select
              isSize="small"
              style={{ fontSize: '0.5rem' }}
              value={this.props.requireExps}
              onChange={e => this.props.onRequireExpsChange(e.target.value)}>
              <option value={true}>必要</option>
              <option value={false}>不要</option>
            </Select>
          )}
          requirePay={() => (
            <Select
              isSize="small"
              style={{ fontSize: '0.5rem' }}
              value={this.props.requirePay}
              onChange={e => this.props.onRequirePayChange(e.target.value)}>
              <option value={true}>必要</option>
              <option value={false}>不要</option>
            </Select>
          )}
          actions={() => actions}
          portrait={() => (
            <input
              type="file"
              accept="image/*"
              isSize="small"
              style={{ fontSize: '0.5rem' }}
              onChange={e =>
                this.props.onPortraitChange(
                  URL.createObjectURL(e.target.files[0])
                )
              }
            />
          )}
        />
        <Button onClick={this.createFellow}>作成</Button>
      </Container>
    );
  }
}
