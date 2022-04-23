export const lastCases = cases => {
  const lastResults = cases.length ? cases[cases.length - 1] : {Confirmed: 0, Deaths: 0, Recovered: 0};
  return {
    confirmed: lastResults.Confirmed,
    deaths: lastResults.Deaths,
    recovered: lastResults.Recovered
  };
};

export const totalCasesByDate = (cases = []) => {
  return {
    confirmed: cases?.[0]?.Confirmed || 0,
    deaths: cases?.[0]?.Deaths || 0,
    recovered: cases?.[0]?.Recovered || 0
  }
};

export const totalCases = cases => {
  return {
    confirmed: cases.TotalConfirmed,
    deaths: cases.TotalDeaths,
    recovered: cases.TotalRecovered
  };
};