import { createContext, useState } from "react";

const modeContext = createContext();

export function ModeProvider({ children }) {
  //state
  const [darkModeState, setDarkModeState] = useState(false);
  return (
    <modeContext.Provider value={{ darkModeState, setDarkModeState }}>
      {children}
    </modeContext.Provider>
  );
}

export default modeContext;
