export const UPDATE_LEVEL = 'UPDATE_LEVEL';
export const UPDATE_PLAYER_NAME = 'UPDATE_PLAYER_NAME';
export const UPDATE_CHARACTER_NAME = 'UPDATE_CHARACTER_NAME';
export const UPDATE_SPECIES = 'UPDATE_SPECIES';
export const UPDATE_SEX = 'UPDATE_SEX';
export const UPDATE_AGE = 'UPDATE_AGE';
export const UPDATE_SKILLS = 'UPDATE_SKILLS';
export const UPDATE_LANGUAGES = 'UPDATE_LANGUAGES';
export const UPDATE_SELF_INTRODUCTION = 'UPDATE_SELF_INTRODUCTION';
export const UPDATE_MANA_POINT = 'UPDATE_MANA_POINT';
export const UPDATE_REQUIRE_REPORT = 'UPDATE_REQUIRE_REPORT';
export const UPDATE_REQUIRE_EXPS = 'UPDATE_REQUIRE_EXPS';
export const UPDATE_REQUIRE_PAY = 'UPDATE_REQUIRE_PAY';
export const UPDATE_FELLOW_ACTION = 'UPDATE_FELLOW_ACTION';
export const UPDATE_LINE = 'UPDATE_LINE';
export const UPDATE_TOTAL = 'UPDATE_TOTAL';
export const UPDATE_EFFECT = 'UPDATE_EFFECT';
export const UPDATE_PORTRAIT = 'UPDATE_PORTRAIT';

export function updateLevel(level) {
  return {
    type: UPDATE_LEVEL,
    level
  };
}
export function updatePlayerName(playerName) {
  return {
    type: UPDATE_PLAYER_NAME,
    playerName
  };
}
export function updateCharacterName(characterName) {
  return {
    type: UPDATE_CHARACTER_NAME,
    characterName
  };
}
export function updateSpecies(species) {
  return {
    type: UPDATE_SPECIES,
    species
  };
}

export function updateSex(sex) {
  return {
    type: UPDATE_SEX,
    sex
  };
}

export function updateAge(age) {
  return {
    type: UPDATE_AGE,
    age
  };
}

export function updateSkills(skills) {
  return {
    type: UPDATE_SKILLS,
    skills
  };
}

export function updateLanguages(languages) {
  return {
    type: UPDATE_LANGUAGES,
    languages
  };
}

export function updateSelfIntroduction(selfIntroduction) {
  return {
    type: UPDATE_SELF_INTRODUCTION,
    selfIntroduction
  };
}

export function updateManaPoint(manaPoint) {
  return {
    type: UPDATE_MANA_POINT,
    manaPoint
  };
}

export function updateRequireReport(requireReport) {
  return {
    type: UPDATE_REQUIRE_REPORT,
    requireReport
  };
}

export function updateRequireExps(requireExps) {
  return {
    type: UPDATE_REQUIRE_EXPS,
    requireExps
  };
}

export function updateRequirePay(requirePay) {
  return {
    type: UPDATE_REQUIRE_PAY,
    requirePay
  };
}

export function updateFellowAction(result, fellowAction) {
  return {
    type: UPDATE_FELLOW_ACTION,
    result,
    fellowAction
  };
}

export function updateLine(result, line) {
  return {
    type: UPDATE_LINE,
    result,
    line
  };
}

export function updateTotal(result, total) {
  return {
    type: UPDATE_TOTAL,
    result,
    total
  };
}

export function updateEffect(result, effect) {
  return {
    type: UPDATE_EFFECT,
    result,
    effect
  };
}

export function updatePortrait(portrait) {
  return {
    type: UPDATE_PORTRAIT,
    portrait
  };
}
