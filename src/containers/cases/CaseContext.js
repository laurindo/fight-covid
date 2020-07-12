import React from "react";

const CaseContext = React.createContext();

export const useCase = () => {
  const context = React.useContext(CaseContext);
  if (!context) throw new Error("useCase must be used within a CaseProvider");
  return context;
};

export const CaseProvider = props => {
  const [cases, setCase] = React.useState([]);
  const value = React.useMemo(() => [cases, setCase], [cases]);
  return <CaseContext.Provider value={value} {...props}/>;
};