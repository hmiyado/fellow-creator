import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Image, Text, Group } from 'react-konva';
import Konva from 'konva';
import fellowTemplateImage from './fellow-template.svg';

export default class FellowPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      templateImage: null,
      portraitImage: new window.Image()
    };
  }

  componentDidMount() {
    const templateImageElement = new window.Image();
    templateImageElement.src = fellowTemplateImage;
    templateImageElement.onload = () => {
      this.setState({ templateImage: templateImageElement });
    };
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.portrait !== '' &&
      this.props.portrait !== prevProps.portrait
    ) {
      this.state.portraitImage.src = this.props.portrait;
      this.state.portraitImage.onload = () => {
        this.portraitImageNode.getLayer().batchDraw();
      };
    }
  }

  render() {
    var actions = [];
    [7, 8, 9, 10].forEach((rolled, index) => {
      const key = `rolled${rolled}`;
      const action = this.props.fellowActions[key];
      actions.push(
        <Group y={25 * index} height={25}>
          <Text
            height={25}
            text={action.fellowAction}
            width={135}
            fontSize={12}
          />
          <Text
            x={147}
            height={25}
            width={135}
            text={action.line}
            fontSize={12}
          />
          <Text
            x={295}
            y={5}
            width={30}
            height={25}
            align="center"
            text={action.total.toString()}
            fontSize={15}
          />
          <Text
            x={340}
            height={25}
            width={135}
            text={action.effect}
            fontSize={12}
          />
        </Group>
      );
    });

    return (
      <Stage width={595} height={420}>
        <Layer>
          <Image image={this.state.templateImage} />
          <Text
            x={25}
            y={40}
            width={40}
            text={this.props.level.toString()}
            fontSize={30}
            align="center"
          />
          <Text
            x={80}
            y={40}
            width={310}
            text={this.props.characterName}
            align="left"
            fontSize={30}
          />
          <Text
            x={25}
            y={90}
            width={115}
            text={this.props.species}
            align="left"
            fontSize={20}
          />
          <Text
            x={150}
            y={90}
            width={115}
            text={this.props.sex}
            align="left"
            fontSize={20}
          />
          <Text
            x={275}
            y={90}
            width={115}
            text={this.props.age}
            align="left"
            fontSize={20}
          />
          <Text
            x={25}
            y={135}
            width={180}
            text={this.props.skills}
            align="left"
            fontSize={20}
          />
          <Text
            x={210}
            y={135}
            width={180}
            text={this.props.languages}
            align="left"
            fontSize={20}
          />
          <Image
            ref={node => (this.portraitImageNode = node)}
            x={405}
            y={30}
            visible={this.props.portrait !== ''}
            width={170}
            height={80}
            image={this.state.portraitImage}
          />
          <Text
            x={400}
            y={135}
            width={180}
            text={this.props.selfIntroduction}
            align="left"
            fontSize={20}
          />
          <Text
            x={25}
            y={230}
            width={60}
            text={this.props.manaPoint.toString()}
            fontSize={30}
            align="left"
          />
          <Text
            x={415}
            y={200}
            width={165}
            text={this.props.playerName}
            align="left"
            fontSize={15}
          />
          <Text
            x={400}
            y={240}
            text={this.props.requireReport ? '必要' : '不要'}
            align="left"
            fontSize={12}
          />
          <Text
            x={460}
            y={240}
            text={this.props.requireExps ? '必要' : '不要'}
            align="left"
            fontSize={12}
          />
          <Text
            x={520}
            y={240}
            text={this.props.requirePay ? '必要' : '不要'}
            align="left"
            fontSize={12}
          />
          <Group x={100} y={300} width={480}>
            {actions}
          </Group>
        </Layer>
      </Stage>
    );
  }
}
