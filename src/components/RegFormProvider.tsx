import React, { createContext, useContext, useReducer, ReactNode } from "react";

const RegFormContext = createContext<any>(null); // Cambié Children por any, pero puedes ajustarlo según tus necesidades

export const useRegFormContext = () => {
  return useContext(RegFormContext);
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_USERDATA_DATA": {
      return { ...state, dataUser: { ...action.data } };
    }
    case "SET_PROPOSALDETAILS_DATA": {
      return { ...state, proposalDetails: { ...action.data } };
    }
    case "SET_CONSIDERATION_DATA": {
      return { ...state, consideration: { ...action.data } };
    }
  }
  return state;
};

interface RegFormProviderProps {
  children: ReactNode;
}

const RegFormProvider: React.FC<RegFormProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { percent: 0 });

  return (
    <RegFormContext.Provider value={[state, dispatch]}>
      {children}
    </RegFormContext.Provider>
  );
};

export default RegFormProvider;
