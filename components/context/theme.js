import { useState, createContext } from 'react';

export const ThemeContext = createContext({
  dark: true,
  setDark: (s) => !s,
});

const ThemeWrapper = ({ children }) => {
  const [dark, setDark] = useState(false);
  const values = { dark, setDark };

  return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
};

export default ThemeWrapper;
