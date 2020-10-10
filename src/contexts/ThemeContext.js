import React, {useState, createContext} from 'react';

export const ThemeContext = createContext();

export function ThemeProvider (props){
  const [isDarkMode, setIsDarkMode] = useState(true);
  const setMode = () => {
    setIsDarkMode(!isDarkMode)
  }
  return(
    <ThemeContext.Provider value={{isDarkMode, setMode}}>
      {props.children}
    </ThemeContext.Provider>
  )
}
