import { useState, createContext } from 'react';

export const ThemeContext = createContext({
  dark: true,
  setDark: (s) => !s,
});

const ThemeWrapper = ({ children }) => {
  const [dark, setDark] = useState(true);
  const toggleTheme = () => {
    setDark(!dark);
  };
  const values = { isThemeDark: dark, toggleTheme };

  return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
};

export default ThemeWrapper;
