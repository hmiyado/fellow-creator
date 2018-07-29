import { connect } from 'react-redux'
import { 
    updateLevel,
    updatePlayerName,
    updateCharacterName,
    updateSpecies,
    updateSex,
    updateAge,
    updateSkills,
    updateLanguages,
    updateSelfIntroduction,
    updateManaPoint,
    updateRequireReport,
    updateRequireExps,
    updateRequirePay,
    updateFellowAction,
    updateLine,
    updateTotal,
    updateEffect
 } from '../actions'
import FellowForm from '../components/FellowForm'

const mapStateToProps = (state, ownProps) => {
    return state;
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLevelChange: level => dispatch(updateLevel(Number.parseInt(level))),
        onPlayerNameChange: playerName => dispatch(updatePlayerName(playerName)),
        onCharacterNameChange: characterName => dispatch(updateCharacterName(characterName)),
        onSpeciesChange: species => dispatch(updateSpecies(species)),
        onSexChange: sex => dispatch(updateSex(sex)),
        onAgeChange: age => dispatch(updateAge(age)),
        onSkillsChange: skills => dispatch(updateSkills(skills)),
        onLanguagesChange: languages => dispatch(updateLanguages(languages)),
        onSelfIntroductionChange: selfIntroduction => dispatch(updateSelfIntroduction(selfIntroduction)),
        onManaPointChange: manaPoint => dispatch(updateManaPoint(Number.parseInt(manaPoint))),
        onRequireReportChange: requireReport => dispatch(updateRequireReport(requireReport.toLowerCase()==='true')),
        onRequireExpsChange: requireExps => dispatch(updateRequireExps(requireExps.toLowerCase()==='true')),
        onRequirePayChange: requirePay => dispatch(updateRequirePay(requirePay.toLowerCase()==='true')),
        onFellowActionChange: (result, fellowAction) => dispatch(updateFellowAction(result, fellowAction)),
        onLineChange: (result, line) => dispatch(updateLine(result, line)),
        onTotalChange: (result, total) => dispatch(updateTotal(result, Number.parseInt(total))),
        onEffectChange: (result, effect) => dispatch(updateEffect(result, effect))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FellowForm)