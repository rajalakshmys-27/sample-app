import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedDocType, setSelectedDocType] = useState("html");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  return (
    <AppContext.Provider
      value={{
        selectedDocType,
        setSelectedDocType,
        isMenuClicked,
        setIsMenuClicked,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
