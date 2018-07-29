import { combineReducers } from 'redux';
import {
  UPDATE_LEVEL,
  UPDATE_PLAYER_NAME,
  UPDATE_CHARACTER_NAME,
  UPDATE_SPECIES,
  UPDATE_AGE,
  UPDATE_SEX,
  UPDATE_SKILLS,
  UPDATE_LANGUAGES,
  UPDATE_SELF_INTRODUCTION,
  UPDATE_MANA_POINT,
  UPDATE_REQUIRE_REPORT,
  UPDATE_REQUIRE_EXPS,
  UPDATE_REQUIRE_PAY,
  UPDATE_FELLOW_ACTION,
  UPDATE_LINE,
  UPDATE_TOTAL,
  UPDATE_EFFECT,
  UPDATE_PORTRAIT
} from './actions.js';

function simpleValue(initialValue, actionType, key) {
  return (state = initialValue, action) => {
    switch (action.type) {
      case actionType:
        return action[key];
      default:
        return state;
    }
  };
}

const level = simpleValue(0, UPDATE_LEVEL, 'level');
const playerName = simpleValue('', UPDATE_PLAYER_NAME, 'playerName');
const characterName = simpleValue('', UPDATE_CHARACTER_NAME, 'characterName');
const species = simpleValue('', UPDATE_SPECIES, 'species');
const sex = simpleValue('', UPDATE_SEX, 'sex');
const age = simpleValue('', UPDATE_AGE, 'age');
const skills = simpleValue('', UPDATE_SKILLS, 'skills');
const languages = simpleValue('', UPDATE_LANGUAGES, 'languages');
const portrait = simpleValue('', UPDATE_PORTRAIT, 'portrait');
const selfIntroduction = simpleValue(
  '',
  UPDATE_SELF_INTRODUCTION,
  'selfIntroduction'
);
const manaPoint = simpleValue(0, UPDATE_MANA_POINT, 'manaPoint');
const requireReport = simpleValue(
  false,
  UPDATE_REQUIRE_REPORT,
  'requireReport'
);
const requireExps = simpleValue(false, UPDATE_REQUIRE_EXPS, 'requireExps');
const requirePay = simpleValue(false, UPDATE_REQUIRE_PAY, 'requirePay');
const fellowActions = (
  state = {
    rolled7: {
      fellowAction: '',
      line: '',
      total: 0,
      effect: ''
    },
    rolled8: {
      fellowAction: '',
      line: '',
      total: 0,
      effect: ''
    },
    rolled9: {
      fellowAction: '',
      line: '',
      total: 0,
      effect: ''
    },
    rolled10: {
      fellowAction: '',
      line: '',
      total: 0,
      effect: ''
    }
  },
  action
) => {
  if (
    [UPDATE_FELLOW_ACTION, UPDATE_LINE, UPDATE_TOTAL, UPDATE_EFFECT].indexOf(
      action.type
    ) < 0
  ) {
    return state;
  }
  const key = `rolled${action.result}`;
  const fellowAction = state[key];

  switch (action.type) {
    case UPDATE_FELLOW_ACTION:
      return Object.assign({}, state, {
        ...state,
        [key]: {
          ...fellowAction,
          fellowAction: action.fellowAction
        }
      });
    case UPDATE_LINE:
      return Object.assign({}, state, {
        ...state,
        [key]: {
          ...fellowAction,
          line: action.line
        }
      });
    case UPDATE_TOTAL:
      return Object.assign({}, state, {
        ...state,
        [key]: {
          ...fellowAction,
          total: action.total
        }
      });
    case UPDATE_EFFECT:
      return Object.assign({}, state, {
        ...state,
        [key]: {
          ...fellowAction,
          effect: action.effect
        }
      });
    default:
      return state;
  }
};

export default combineReducers({
  level,
  playerName,
  characterName,
  species,
  sex,
  age,
  skills,
  languages,
  portrait,
  selfIntroduction,
  manaPoint,
  requireReport,
  requireExps,
  requirePay,
  fellowActions
});
