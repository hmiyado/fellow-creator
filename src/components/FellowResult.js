import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Image } from 'react-konva';
import Konva from 'konva';
import fellowTemplateImage from './fellow-template.svg';

export class FellowResult extends Component {
    constructor(){
        super();
        this.state= {
            templateImage: null
        }
    }

    componentDidMount() {
        const imageElement = new window.Image();
        imageElement.src = fellowTemplateImage;
        imageElement.onload = () => {
            this.setState({templateImage: imageElement});
        }
    }

    render() {
        return (
            <Stage width={595} height={420}>
                <Layer>
                    <Image 
                        image={this.state.templateImage}
                    />
                </Layer>
            </Stage>
        );
    }
}