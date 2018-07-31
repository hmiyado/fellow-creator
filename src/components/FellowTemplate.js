import './fellowTemplateStyle.css';
import React from 'react';
import fellowTemplateSvg from './fellow-template.svg';

const FellowTemplate = ({
  level,
  characterName,
  portrait,
  species,
  sex,
  age,
  skills,
  languages,
  selfIntroduction,
  manaPoint,
  playerName,
  requireReport,
  requireExps,
  requirePay,
  actions
}) => {
  return (
    <div style={{ width: 595 }}>
      <img src={fellowTemplateSvg} alt="fellow sheet" />
      <div className="levelContainer">{level()}</div>
      <div className="characterNameContainer">{characterName()}</div>
      <div className="portraitContainer">{portrait()}</div>
      <div className="speciesContainer">{species()}</div>
      <div className="sexContainer">{sex()}</div>
      <div className="ageContainer">{age()}</div>
      <div className="skillsContainer">{skills()}</div>
      <div className="languagesContainer">{languages()}</div>
      <div className="selfIntroductionContainer">{selfIntroduction()}</div>
      <div className="manaPointContainer">{manaPoint()}</div>
      <div className="playerNameContainer">{playerName()}</div>
      <div className="requireReportContainer">{requireReport()}</div>
      <div className="requireExpsContainer">{requireExps()}</div>
      <div className="requirePayContainer">{requirePay()}</div>
      <div className="actionsContainer">{actions()}</div>
    </div>
  );
};

export default FellowTemplate;
