export const lastCases = cases => {
  const lastResults = cases ? cases : {cases: 0, deaths: 0, suspects: 0, refuses: 0};
  return {
    suspects: lastResults.suspects || 0,
    deaths: lastResults.deaths || 0,
    refuses: lastResults.refuses || 0,
    cases: lastResults.cases|| 0
  };
};

export const totalCasesByDate = (cases = []) => {
  return {
    cases: cases?.[0]?.cases || 0,
    deaths: cases?.[0]?.deaths || 0,
    refuses: cases?.[0]?.refuses || 0,
    suspects: cases?.[0]?.suspects || 0
  }
};

export const totalCases = cases => {
  return {
    cases: cases.cases,
    deaths: cases.deaths,
    suspects: cases.suspects,
    refuses: cases.refuses,
  };
};