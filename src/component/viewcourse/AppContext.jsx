import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedDocType, setSelectedDocType] = useState("html");

  return (
    <AppContext.Provider value={{ selectedDocType, setSelectedDocType }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
