import React, {useState, createContext} from 'react';

export const ThemeContext = createContext();

export function ThemeProvider (props){
  const [isDarkMode, setIsDarkMode] = useState(true)
  return(
    <ThemeContext.Provider value={{isDarkMode, setIsDarkMode}}>
      {props.children}
    </ThemeContext.Provider>
  )
}
