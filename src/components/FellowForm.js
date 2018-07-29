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

const FellowForm = ({
  level,
  onLevelChange,
  playerName,
  onPlayerNameChange,
  characterName,
  onCharacterNameChange,
  species,
  onSpeciesChange,
  sex,
  onSexChange,
  age,
  onAgeChange,
  skills,
  onSkillsChange,
  languages,
  onLanguagesChange,
  selfIntroduction,
  onSelfIntroductionChange,
  manaPoint,
  onManaPointChange,
  requireReport,
  onRequireReportChange,
  requireExps,
  onRequireExpsChange,
  requirePay,
  onRequirePayChange,
  onFellowActionChange,
  onLineChange,
  onTotalChange,
  onEffectChange
}) => {
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
                onChange={e => onFellowActionChange(rolled, e.target.value)}
              />
            </Control>
          </Field>
          <Field>
            <Control>
              <Input
                type="text"
                style={{ fontSize: '0.5rem' }}
                onChange={e => onLineChange(rolled, e.target.value)}
              />
            </Control>
          </Field>
          <Field style={{ width: 40, flexGrow: 0 }}>
            <Control>
              <Input
                type="number"
                style={{ fontSize: '0.5rem' }}
                onChange={e => onTotalChange(rolled, e.target.value)}
              />
            </Control>
          </Field>
          <Field>
            <Control>
              <Input
                type="text"
                style={{ fontSize: '0.5rem' }}
                onChange={e => onEffectChange(rolled, e.target.value)}
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
            value={level}
            onChange={e => onLevelChange(e.target.value)}
          />
        )}
        characterName={() => (
          <Input
            type="text"
            isSize="small"
            onChange={e => onCharacterNameChange(e.target.value)}
          />
        )}
        playerName={() => (
          <Input
            type="text"
            style={{ fontSize: '0.5rem' }}
            onChange={e => onPlayerNameChange(e.target.value)}
          />
        )}
        species={() => (
          <Input
            type="text"
            style={{ fontSize: '0.5rem' }}
            onChange={e => onSpeciesChange(e.target.value)}
          />
        )}
        sex={() => (
          <Input
            type="text"
            style={{ fontSize: '0.5rem' }}
            onChange={e => onSexChange(e.target.value)}
          />
        )}
        age={() => (
          <Input
            type="text"
            style={{ fontSize: '0.5rem' }}
            onChange={e => onAgeChange(e.target.value)}
          />
        )}
        skills={() => (
          <TextArea
            style={{ fontSize: '0.5rem', resize: 'none' }}
            rows={3}
            onChange={e => onSkillsChange(e.target.value)}
          />
        )}
        languages={() => (
          <TextArea
            style={{ fontSize: '0.5rem', resize: 'none' }}
            rows={3}
            onChange={e => onLanguagesChange(e.target.value)}
          />
        )}
        selfIntroduction={() => (
          <TextArea
            style={{ fontSize: '0.5rem', resize: 'none' }}
            rows={3}
            onChange={e => onSelfIntroductionChange(e.target.value)}
          />
        )}
        manaPoint={() => (
          <Input
            type="number"
            isSize="small"
            onChange={e => onManaPointChange(e.target.value)}
          />
        )}
        requireReport={() => (
          <Select
            isSize="small"
            style={{ fontSize: '0.5rem' }}
            value={requireReport}
            onChange={e => onRequireReportChange(e.target.value)}>
            <option value={true}>必要</option>
            <option value={false}>不要</option>
          </Select>
        )}
        requireExps={() => (
          <Select
            isSize="small"
            style={{ fontSize: '0.5rem' }}
            value={requireExps}
            onChange={e => onRequireExpsChange(e.target.value)}>
            <option value={true}>必要</option>
            <option value={false}>不要</option>
          </Select>
        )}
        requirePay={() => (
          <Select
            isSize="small"
            style={{ fontSize: '0.5rem' }}
            value={requirePay}
            onChange={e => onRequirePayChange(e.target.value)}>
            <option value={true}>必要</option>
            <option value={false}>不要</option>
          </Select>
        )}
        actions={() => actions}
        image={() => (
          <Input
            type="file"
            accept="image/*"
            name="image"
            isSize="small"
            style={{ fontSize: '0.5rem' }}
            onChange={this.handleInputChange}
          />
        )}
      />
      <Button onClick={this.createFellow}>作成</Button>
    </Container>
  );
};

export default FellowForm;
