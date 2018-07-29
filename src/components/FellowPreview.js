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
            text={this.props.level}
            fontSize={30}
            align="center"
          />
        </Layer>
      </Stage>
    );
  }
}
