import React, { Component } from 'react';
import { Input, TextArea, Select, Button } from 'bloomer';
import 'bulma/css/bulma.css';
import FellowTemplate from './FellowTemplate';

export default class FellowForm extends Component {
  render() {
    var actions = [];
    const fieldStyle = { marginRight: '0.75rem', flexGrow: 1, flexShrink: 1 };
    const controlStyle = { position: 'relative', textAlign: 'left' };
    [7, 8, 9, 10].forEach(rolled => {
      actions.push(
        <div key={rolled} style={{ marginBottom: '0.1rem', display: 'flex' }}>
          <div
            style={{
              display: 'flex',
              flexBasis: 0,
              flexGrow: 5,
              flexShrink: 1
            }}>
            <div style={fieldStyle}>
              <div style={controlStyle}>
                <Input
                  type="text"
                  style={{ fontSize: '0.5rem' }}
                  onChange={e =>
                    this.props.onFellowActionChange(rolled, e.target.value)
                  }
                />
              </div>
            </div>
            <div style={fieldStyle}>
              <div style={controlStyle}>
                <Input
                  type="text"
                  style={{ fontSize: '0.5rem' }}
                  onChange={e =>
                    this.props.onLineChange(rolled, e.target.value)
                  }
                />
              </div>
            </div>
            <div style={{ ...fieldStyle, width: 40, flexGrow: 0 }}>
              <div style={controlStyle}>
                <Input
                  type="number"
                  style={{ fontSize: '0.5rem' }}
                  onChange={e =>
                    this.props.onTotalChange(rolled, e.target.value)
                  }
                />
              </div>
            </div>
            <div style={fieldStyle}>
              <div style={controlStyle}>
                <Input
                  type="text"
                  style={{ fontSize: '0.5rem' }}
                  onChange={e =>
                    this.props.onEffectChange(rolled, e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div style={{ position: 'relative' }}>
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
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                paddingLeft: '5px',
                paddingRight: '5px'
              }}>
              <input
                type="file"
                accept="image/*"
                style={{
                  fontSize: '0.5rem',
                  position: 'absolute',
                  width: '100%',
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
                onChange={e =>
                  this.props.onPortraitChange(
                    URL.createObjectURL(e.target.files[0])
                  )
                }
              />
            </div>
          )}
        />
        <Button download="fellow.png" href={this.props.fellowImageUrl}>
          ダウンロード
        </Button>
      </div>
    );
  }
}
