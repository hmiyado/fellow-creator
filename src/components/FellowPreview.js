import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Image, Text } from 'react-konva';
import Konva from 'konva';
import fellowTemplateImage from './fellow-template.svg';

export default class FellowPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      templateImage: null
    };
  }

  componentDidMount() {
    const imageElement = new window.Image();
    imageElement.src = fellowTemplateImage;
    imageElement.onload = () => {
      this.setState({ templateImage: imageElement });
    };
  }

  render() {
    return (
      <Stage width={595} height={420}>
        <Layer>
          <Image image={this.state.templateImage} />
        </Layer>
        <Layer>
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
        </Layer>
      </Stage>
    );
  }
}
