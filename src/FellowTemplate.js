import './fellowTemplateStyle.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import fellowTemplateSvg from './fellow-template.svg';

export class FellowTemplate extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img ref={this.onMeasuredImage} src={fellowTemplateSvg}/>
                <div  className="levelContainer">
                    { this.props.level() }
                </div>
                <div className="characterNameContainer">
                    { this.props.characterName() }
                </div>
                <div className="imageContainer">
                    { this.props.image()}
                </div>
                <div className="speciesContainer">
                    { this.props.species() }
                </div>
                <div className="sexContainer">
                    { this.props.sex() }
                </div>
                <div className="ageContainer">
                    { this.props.age() }
                </div>
                <div className="skillsContainer">
                    { this.props.skills() }
                </div>
                <div className="languagesContainer">
                    { this.props.languages()}
                </div>
                <div className="selfIntroductionContainer">
                    { this.props.selfIntroduction()}
                </div>
                <div className="manaPointContainer">
                    { this.props.manaPoint()}
                </div>
                <div className="playerNameContainer">
                    { this.props.playerName() }
                </div>
                <div className="requireReportContainer">
                    { this.props.requireReport()}
                </div>
                <div className="requireExpsContainer">
                    { this.props.requireExps()}
                </div>
                <div className="requirePayContainer">
                    { this.props.requirePay()}
                </div>
                <div className="actionsContainer">
                    { this.props.actions()}
                </div>
            </div>
        );
    }
}